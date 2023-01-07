import { has } from '../src/has'

describe('testing has', () => {
    test('with regular value', () => {
        const easyObject: any = {'hello': {'world': 1}}
        let isExist: boolean = has(easyObject, 'hello.world')
        expect(has(easyObject, 'hello.world')).toBe(true)
        expect(has(easyObject, 'hello.worldoops')).toBe(false)
    });

    test('with array value', () => {
        const hardObject: any = {'hard': {'hello': ['test1', 'test2']}}
        expect(has(hardObject, 'hard.hello.0')).toBe(true)
        expect(has(hardObject, 'hard.hello.2')).toBe(false)
    })
})