import express from 'express'

const increasedIn = express()

increasedIn.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default increasedIn