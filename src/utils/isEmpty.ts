/**
 * Returns if empty object.
 * @param {object} obj - The object to check.
 * @returns Return "true" if object is empty, "false" else.
 */
export function isEmpty(obj: any) {
    for (var x in obj) { return false; }
    return true;
}