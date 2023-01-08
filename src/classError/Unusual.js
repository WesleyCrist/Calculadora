export default class Unusual extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'unusual'
        // Classe para erros incomun, causados pelo código
    }
}
