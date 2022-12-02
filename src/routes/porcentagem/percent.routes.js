import express from 'express'
import Calculator from '../../functions/Calculator.js'

const percent = express()

percent.get('/:x?/:y?', (req, res) => {

    if(!req.params.x && !req.params.y) {
        res.status(400).send({
            message: 'Ambos os parâmetro precisam ser preenchidos',
            status: 'ainda a modificar'
        })
    } else{
        const valX = Number(req.params.x)
        const valY = Number(req.params.y)
        if(isNaN(valX) || isNaN(valY)) {
            res.status(400).send({
                message: 'Nenhum parâmetro deve estar fazio ou receber strings, ambos recebem number',
                codeStatus: 400
            })
        } else {
            try {
                const result = Calculator.percent(valX, valY)
                res.status(200).send({
                    message: `${valX}% de ${valY} é ${result}`,
                    X: valX,
                    Y: valY,
                    Resultado: result,
                    status: 200
                })
            } catch(e) {
                res.status(500).send({
                    message: 'Falha na execução',
                    error: e.message
                })
            }
        }
    }
})

export default percent
