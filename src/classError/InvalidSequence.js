export default class InvalidSequence extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'invalid sequence'
    }
}