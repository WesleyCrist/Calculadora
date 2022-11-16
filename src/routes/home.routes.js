import express from 'express'

const home = express()

// Arquivo em constante mudança
home.get('/', (req, res) =>{
    res.status(200).send({
        message: 'Rotas da aplicação',
        percent: 'Porcentagem de um determinado valor'
    })
})

export default home