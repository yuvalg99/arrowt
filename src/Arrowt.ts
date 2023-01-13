import _ from 'lodash'
import { IAction } from './IAction'
import { Remove } from './actions/Remove'
import { transform } from './actions/Transform'
import { If } from './if'
import { get } from './utils/get'

export default class Arrowt {

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


    /**
     * 
     * @param {string} field - The field to remove 
     * @returns {Arrowt}
     */
    @If
    public remove(field: string): Arrowt {
        this.actions.push(new Remove(field))
        return this
    }

    /**
     * 
     * @param {string} field - The field to remove
     * @param {(value: any) => any} tranformFunc - Function to run on the field
     * @returns {Arrowt}
     */
    @If
    public transform(field: string, tranformFunc: (value: any) => any): Arrowt {
        this.actions.push(new transform(field, tranformFunc))
        return this
    }

    public if(path: string, IfFunc: (value: any) => boolean): Arrowt {
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