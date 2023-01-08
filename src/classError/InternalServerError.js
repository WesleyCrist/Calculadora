export default class InternalServerError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'Internal Server Error'
        // this.statusCode = 500
    }
}
