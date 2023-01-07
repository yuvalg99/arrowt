/**
 * Gets the value at path of object.
 * @param {any} object - object to query. 
 * @param path - the path of the property to get.
 * @returns Returns the resolved value.
 */
export function get(object:any, path: string, defaultValue: any = undefined) : any {
    const fields: string[] = path.split(".")
    while (fields.length != 1 && typeof object[fields[0]] === 'object') {
        return get(object[fields[0]], fields.slice(1).join("."))
    }

    return object[fields[0]] || defaultValue
}