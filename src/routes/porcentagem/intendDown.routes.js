import express from 'express'

const intendDown = express()

intendDown.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default intendDown