export default class InvalidSequence extends Error{
    constructor(msg) {
        // if(typeof(msg) !== 'string') throw new InvalidType('invalid string, lowest number first')
        super(msg)
    }
}