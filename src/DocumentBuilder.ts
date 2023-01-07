import _ from 'lodash'

export default class Transf {

    baseObject: any = {}
    shouldDoNext: boolean = false
    silenceErros: boolean

    /**
     * 
     * @param {any} baseObject - The base object for transformation. 
     */
    constructor(baseObject: any, silenceErros: boolean = false) {
        this.baseObject = baseObject
        this.silenceErros = silenceErros
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
        if (this.shouldDoNext && _.has(this.baseObject, field)) {
            _.unset(this.baseObject, field)
        }

        return this
    }


}