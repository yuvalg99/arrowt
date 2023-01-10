import { set } from '../../src/utils/set'

describe('testing get', () => {
    test('with regular value', () => {
        const easyObject: any = { 'hello': { 'world': 1 } }
        const isModified: boolean = set(easyObject, 'hello.world', 2)
        expect(isModified).toBe(true)
        expect(easyObject['hello']['world']).toBe(2)
    });

    test('with array value', () => {
        const hardObject: any = { 'hard': { 'hello': ['test1', 'test2'] } }
        const isModified: boolean = set(hardObject, 'hard.hello.0', 'test3')
        expect(isModified).toBe(true)
        expect(hardObject['hard']['hello'][0]).toBe('test3')
    })
})