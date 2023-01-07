/**
 * Checks if path is a direct property of object.
 * @param {any} object - The object to query.
 * @param path - The path to check,
 * @returns {boolean} - Returns `true` if {path} exits, else `false`
 */
export function has(object: any, path: string) {
    const fields: string[] = path.split(".")

    while (fields.length != 1 && typeof object[fields[0]] === 'object') {
        return true
    }

    return false
}