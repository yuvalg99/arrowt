export function has(object: any, path: string,) {
    const fields: string[] = path.split(".")

    while (fields.length != 1 && typeof object[fields[0]] === 'object') {
        return true
    }

    return false
}