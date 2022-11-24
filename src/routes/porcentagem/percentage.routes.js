import express from 'express'

const percentage = express()

percentage.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default percentage