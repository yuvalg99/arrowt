import Arrowt from "../src/Arrowt"

describe("Document Builder", () => {
    test("remove path from object", () => {
        const baseObject = {
            "hello": {
                "world": 1,
                "mars": 2
            }
        }
        const documentBuilder: Arrowt = new Arrowt(baseObject)
        console.log(documentBuilder.shouldDoNext)
        documentBuilder.remove("hello.mars")
        const finalObject = documentBuilder.build()
        expect(finalObject).toEqual({ "hello": { "world": 1 } })
    })
    test("transform path of object", () => {
        const baseObject = {
            "hello": {
                "world": 1,
                "mars": 2
            }
        }
        const documentBuilder: Arrowt = new Arrowt(baseObject)
        documentBuilder.transform('hello.mars', (value: number) => value + 1)
        const finalObject = documentBuilder.build()
        expect(finalObject).toEqual({ "hello": { "world": 1, "mars": 3 } })
    })
    test("if is truthy", () => {
        const documentBuilder: Arrowt = new Arrowt({})
        documentBuilder.if('', () => true)
        expect(documentBuilder.shouldDoNext).toBeTruthy()
    })
    test("if is falsy", () => {
        const documentBuilder: Arrowt = new Arrowt({})
        documentBuilder.if('', () => false)
        expect(documentBuilder.shouldDoNext).toBeFalsy()
    })
})