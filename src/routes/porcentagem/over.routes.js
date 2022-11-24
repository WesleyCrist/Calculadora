import express from 'express'

const over = express()

over.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default over