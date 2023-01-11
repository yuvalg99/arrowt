import Arrowt from "../src/Arrowt";

function isAdult(obj: any): boolean {
    return obj.age > 18
}

const trafomration = new Arrowt({ 'name': { 'first': 'Yuval', 'last': 'Goihberg' }, 'age': 23 })
trafomration.if('age', isAdult).transform('name.first', (name: string) => 'Mr. ' + name)
console.log(trafomration.build())