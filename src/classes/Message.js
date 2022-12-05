 export default class Message {

    #notNumber = 'O argumento passado não é do tipo "number"'
    #notFilled = 'Ambos os parâmetro precisam ser preenchidos'
    #imcomplete = 'Nenhum parâmetro deve estar fazio ou receber strings, ambos recebem number'
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

    get notFilled() {
        return this.#notFilled
    }

    get incomplete() {
        return this.#imcomplete
    }
}
