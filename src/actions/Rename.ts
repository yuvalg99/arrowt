import { unset } from "lodash";
import { IAction } from "../IAction";
import { ActionStatus } from "../utils/ActionStatus";
import { get } from "../utils/get";
import { has } from "../utils/has";
import { set } from "../utils/set";

export class Rename implements IAction {

    private oldName: string
    private newName: string

    constructor(oldName: string, newName: string) {
        this.oldName = oldName
        this.newName = newName
    }

    run(object: any): ActionStatus {
        if (has(this.newName, object)) {
            const oldValue: any = get(object, this.oldName)
            set(object, this.newName, oldValue, true)
        }
        return 'SUCCESS'
    }
}