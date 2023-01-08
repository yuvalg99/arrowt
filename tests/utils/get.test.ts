import { get } from '../../src/utils/get'

describe('testing get', () => {
    test('easy object', () => {
        const easyObject: any = { 'hello': { 'world': 1 } }
        expect(get(easyObject, 'hello.world')).toBe(1)
    });

    test('hard object', () => {
        const hardObject: any = { 'hard': { 'hello': ['test1', 'test2'] } }
        expect(get(hardObject, 'hard.hello.0')).toBe('test1')
    })
})