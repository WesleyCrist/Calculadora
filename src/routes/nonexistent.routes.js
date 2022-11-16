import express from 'express'

const none = express()

// Tramento para para digitação inválida de URL
none.use((req, res, next) => {
    res.status(404).send({
        message: 'confira se a url está escrita de forma correta',
        error: 'Page not found',
        statusCode: 404
    })
})

export default none
