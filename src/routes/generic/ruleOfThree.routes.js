import express from 'express'
const rule = express()

rule.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default rule
