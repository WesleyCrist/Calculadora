import Message from './Message.js'
const msg = new Message()

export default class Templet {
    constructor() {}

    static getNotFound(req, res, next) {
        res.status(404).send({
            message: msg.notFound,
            error: 'Page not found',
            statusCode: 404
        })
    }

    static getNotBuild(req, res) {
        res.status(501).send({
            message: msg.notBuild,
            statusCode: 501
        })
    }

    static getHome(req, res) {
        res.status(200).send({
            message: 'Rotas da aplicação',
            percent: 'Porcentagem de um determinado valor'
        })
    }

    // static getFail(req, res) {
    //     res.send({
    //     })
    // }
}
