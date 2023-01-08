export default class LowerValue extends Error{
    constructor(msg) {
        super(msg)
        this.name = 'lower value'
    }
}