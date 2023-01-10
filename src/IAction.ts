import { ActionStatus } from "./utils/ActionStatus";

export interface IAction {
    run(obj: any): ActionStatus
}