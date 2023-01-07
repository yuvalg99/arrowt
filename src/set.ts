/**
 * Sets the value at path of object.
 * @param {any} object - The object to modify.
 * @param {string} path - The path of the property to set.
 * @param {any} value - The value to set.
 * 
 * @returns {boolean} - Return `true` if the object was modified, else `false`.
 */
export function set(object: any, path: string, value: any): boolean {
    const fields: string[] = path.split(".")
    if (fields.length != 1 && fields[0] in object) {
       return set(object[fields[0]], fields.slice(1).join("."), value)
    }

    if (fields.length === 1 && fields[0] in object) {
        object[fields[0]] = value
        return true
    }

    return false
    
}