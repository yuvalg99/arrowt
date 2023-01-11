import { IAction } from "../IAction";
import { ActionStatus } from "../utils/ActionStatus";
import { get } from "../utils/get";
import { has } from "../utils/has";
import { set } from "../utils/set";

export class Transform implements IAction {

    private path: string
    private tranformFunc: (value: any) => any

    constructor(fieldToTransform: string, tranformFunc: (value: any) => any) {
        this.path = fieldToTransform
        this.tranformFunc = tranformFunc
    }

    run(obj: any): ActionStatus {
        if (has(obj, this.path)) {
            return set(obj, this.path, this.tranformFunc(get(obj, this.path))) ? 'SUCCESS' : 'FAILED'
        }

        return 'SUCCESS'
    }

}