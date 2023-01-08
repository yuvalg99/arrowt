/**
 * Unsets the value at path of object.
 * @param {any} object - The object to modify.
 * @param {string} path - The path of the property to unset.
 * 
 * @returns {boolean} - Return "true" if path was found in object and unsetted, else "false".
 */
export function unset(object: any, path: string): boolean {
    const fields = path.split(".")
    if (fields.length != 1 && fields[0] in object) {
        //TODO: Add recusive unset for null objects.
        return unset(object[fields[0]], fields.slice(1).join("."))
    }

    if (!(fields[0] in object)) {
        return false
    }

    delete object[fields[0]]
    return true
}