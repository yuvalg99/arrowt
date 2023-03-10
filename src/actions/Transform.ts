import { IAction } from "../IAction";
import { ActionStatus } from "../utils/ActionStatus";
import { get } from "../utils/get";
import { has } from "../utils/has";
import { set } from "../utils/set";

export class transform implements IAction {

    private path: string
    private tranformFunc: (value: any) => any

    constructor(fieldTotransform: string, tranformFunc: (value: any) => any) {
        this.path = fieldTotransform
        this.tranformFunc = tranformFunc
    }

    run(obj: any): ActionStatus {
        if (has(obj, this.path)) {
            return set(obj, this.path, this.tranformFunc(get(obj, this.path))) ? 'SUCCESS' : 'FAILED'
        }

        return 'SUCCESS'
    }

}