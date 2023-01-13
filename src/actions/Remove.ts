import { IAction } from "../IAction";
import { ActionStatus } from "../utils/ActionStatus";
import { unset } from "../utils/unset";

export class Remove implements IAction {

    private fieldToRemove: string

    constructor(fieldToRemove: string) {
        this.fieldToRemove = fieldToRemove
    }

    run(object: any): ActionStatus {
        return unset(object, this.fieldToRemove) ? 'SUCCESS' : 'FAILED'
    }
}