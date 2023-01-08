export default class InvalidType extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'invalid argument type'
    }
}