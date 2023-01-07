import _ from 'lodash'

export default class Transf {

    baseObject: any = {}
    shouldDoNext: boolean = false

    /**
     * 
     * @param {any} baseObject - The base object for transformation. 
     */
    constructor(baseObject: any) {
        this.baseObject = baseObject
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

    }

    /**
     * 
     * @param field 
     * @returns 
     */
    public remove(field: string): Transf {
        if (this.shouldDoNext && _.has(this.baseObject, field)) {
            _.unset(this.baseObject, field)
        }

        return this
    }


}