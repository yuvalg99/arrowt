import Transf from "../src/Transf"

describe("Document Builder", () => {
    test("remove path from object", () => {
        const baseObject = {
            "hello": {
                "world": 1,
                "mars": 2
            }
        }
        const documentBuilder: Transf = new Transf(baseObject)
        documentBuilder.remove("hello.mars")
        const finalObject = documentBuilder.build()
        expect(finalObject).toEqual({ "hello": { "world": 1 } })
    })
})