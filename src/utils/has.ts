/**
 * Checks if path is a direct property of object.
 * @param {any} object - The object to query.
 * @param path - The path to check,
 * @returns {boolean} - Returns `true` if {path} exits, else `false`
 */
export function has(object: any, path: string): boolean {
    const fields: string[] = path.split(".")
    if (fields.length != 1 && typeof object[fields[0]] === 'object') {
        return has(object[fields[0]], fields.slice(1).join("."))
    }

    return fields[0] in object
}