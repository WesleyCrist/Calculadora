 export default class Message {

    #notNumber = 'O argumento passado não é do tipo "number"'
    
    // Mensagem de falha
    #fail = 'Falha na execução'

    // Alterar para static
    get notNumber() {
        return this.#notNumber
    }

    // Resgatar mensagem de falha
    get fail() {
        return this.#fail
    }
    static getFail() {
        return Message.getFail
    }
}
