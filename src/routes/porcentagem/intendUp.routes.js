import express from 'express'

const intendUp = express()

intendUp.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default intendUp