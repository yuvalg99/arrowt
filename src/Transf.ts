import _ from 'lodash'
import { IAction } from './IAction'
import { Remove } from './Remove'

export default class Transf {

    /**
     * The base object to transform
     * 
     * @defaultValue 
     */
    private baseObject: any = {}
    private shouldDoNext = false
    public throwErros: boolean
    public actions: IAction[] = []

    /**
     * 
     * @param {any} baseObject - The base object for transformation. 
     */
    constructor(baseObject: any, throwErrors: boolean = false) {
        this.baseObject = baseObject
        this.throwErros = throwErrors
    }

    /**
     * 
     * @param field 
     * @param shouldDoFunc 
     * @returns 
     */
    public ifField(field: string, shouldDoFunc: (fieldValue: any) => boolean): Transf {
        if (_.has(this.baseObject, field)) {
            this.shouldDoNext = shouldDoFunc(_.get(this.baseObject, field))
        }

        return this
    }

    /**
     * 
     * @param shouldDoFunc 
     */
    public ifObject(shouldDoFunc: (object: any) => boolean): Transf {
        this.shouldDoNext = shouldDoFunc(this.baseObject)

        return this
    }

    /**
     * 
     * @param field 
     * @returns 
     */
    public remove(field: string): Transf {
        this.actions.push(new Remove(field))
        return this
    }

    public build(): any {
        for (let action of this.actions) {
            action.run(this.baseObject)
        }
        return this.baseObject
    }


}