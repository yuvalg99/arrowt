import _ from 'lodash'
import { IAction } from './IAction'
import { Remove } from './actions/Remove'
import { Transform } from './actions/Transform'
import { If } from './if'
import { get } from './utils/get'

export default class Transf {

    /**
     * The base object to transform
     * 
     * @defaultValue 
     */
    private baseObject: any = {}
    shouldDoNext = true
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

    // /**
    //  * 
    //  * @param field 
    //  * @param shouldDoFunc 
    //  * @returns 
    //  */
    // public ifField(field: string, shouldDoFunc: (fieldValue: any) => boolean): Transf {
    //     if (_.has(this.baseObject, field)) {
    //         this.shouldDoNext = shouldDoFunc(_.get(this.baseObject, field))
    //     }

    //     return this
    // }

    // /**
    //  * 
    //  * @param shouldDoFunc 
    //  */
    // public ifObject(shouldDoFunc: (object: any) => boolean): Transf {
    //     this.shouldDoNext = shouldDoFunc(this.baseObject)

    //     return this
    // }

    /**
     * 
     * @param {string} field - The field to remove 
     * @returns {Transf}
     */
    @If
    public remove(field: string): Transf {
        this.actions.push(new Remove(field))
        return this
    }

    /**
     * 
     * @param {string} field - The field to remove
     * @param {(value: any) => any} tranformFunc - Function to run on the field
     * @returns {Transf}
     */
    @If
    public transform(field: string, tranformFunc: (value: any) => any): Transf {
        this.actions.push(new Transform(field, tranformFunc))
        return this
    }

    public if(path: string, IfFunc: (value: any) => boolean): Transf {
        console.log(path)
        this.shouldDoNext = IfFunc(get(this.baseObject, path))
        return this
    }

    public build(): any {
        for (let action of this.actions) {
            action.run(this.baseObject)
        }
        return this.baseObject
    }


}