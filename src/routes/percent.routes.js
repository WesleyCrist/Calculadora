import express from 'express'
import Calculator from '../functions/Calculator.js'

const percent = express()

// Rota para o caso de nenhum envio de números para calculo
percent.get('/', (req, res) => {
    res.send({
        message: 'os parâmentros precisam ser preenchidos',
        status: 'ainda a modificar'
    })
})

// Rota para calculo de porcentagem
percent.get('/:x/:y', (req, res) => {

    const valX = Number(req.params.x)
    const valY = Number(req.params.y)
    const result = Calculator.percent(valX, valY)
    if(!isNaN(valX) && !isNaN(valY)) {
        try {
            res.status(200).send({
                message: `${valX}% de ${valY} é ${result}`,
                X: req.params.x,
                Y: req.params.y,
                Resultado: result,
                status: 200
            })
        } catch(e) {
            res.status(500).send({
                message: 'Falha na execução...',
                error: 'e.message'
            })
        }
    } else {
        res.status(400).send({
            message: 'Os atributos enviados pela url não podem ser Strings, apenas number',
            codeStatus: 400
        })
    }
})

export default percent
