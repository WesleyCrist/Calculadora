import Message from './Message.js'
const msg = new Message()

export default class Templet {
    constructor() {}

    // Rota inexistente
    static getNotFound(req, res, next) {
        res.status(404).send({
            message: msg.notFound,
            error: 'Page not found',
            statusCode: 404
        })
    }

    // Página não construída
    static getNotBuild(req, res) {
        res.status(501).send({
            message: msg.notBuild,
            statusCode: 501
        })
    }

    // homepage
    static getHome(req, res) {
        res.status(200).send({
            message: 'Rotas da aplicação',
            percent: 'Porcentagem de um determinado valor'
        })
    }

    // static getFail(req, res) {

    // }

    static test(x, y) {
        if(!x && !y) {
            // code para não recebimento dos valores X e Y
        } else {
            // code para o recebimento de valores
            const valX = Number(x)
            const valY = Number(y)
            if(isNaN(valX) || isNaN(valY)) {
                // code para o recebimento de valores incorretos ou incomepletos
            } else {
                // code para caso esteja tudo certo
            }
        }
        // code
    }

    static answer() {
        const answers = [{
            // code para ok
        }, {
            // code para erro
        }]
    }
}
