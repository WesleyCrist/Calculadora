import express from 'express'

const decreasedIn = express()

decreasedIn.get('/', (req, res) => {
    res.status(501).send({
        message: 'serviço não implementado',
        statusCode: 501
    })
})

export default decreasedIn