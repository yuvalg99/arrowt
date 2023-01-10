import { unset } from '../../src/utils/unset'

describe('Unset', () => {
    test('should unset specified path in object', () => {
        const easyObject: any = { 'hello': { 'world': 1 } }
        const isModified: boolean = unset(easyObject, 'hello.world')
        expect(isModified).toBe(true)
        expect(easyObject).toEqual({ 'hello': {} })
    });

    test('should not unset non-existing path in object', () => {
        const easyObject: any = { 'hello': { 'world': 1 } }
        const isModified: boolean = unset(easyObject, 'hello.mars')
        expect(isModified).toBe(false)
        expect(easyObject).toEqual({ 'hello': { 'world': 1 } })
    });
})