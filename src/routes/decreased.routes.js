import express from 'express'

const decreased = express()

decreased.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default decreased