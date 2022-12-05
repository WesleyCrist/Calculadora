import express from 'express'

const subRoute = express()

subRoute.get('/', (req, res) => {
    res.status(200).send({
        message: 'Selecione uma das rotas para utilização',
        statuscode: 200,
        routes: {
            // Escrever todas as rotas que estão dentro de porcentagem
        }
    })
})

 export default subRoute