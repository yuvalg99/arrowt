import { unset } from "lodash";
import { IAction } from "../IAction";
import { ActionStatus } from "../utils/ActionStatus";

export class Remove implements IAction {

    private fieldToRemove: string

    constructor(fieldToRemove: string) {
        this.fieldToRemove = fieldToRemove
    }

    run(object: any): ActionStatus {
        return unset(object, this.fieldToRemove) ? 'SUCCESS' : 'FAILED'
    }
}