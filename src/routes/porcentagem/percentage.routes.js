import express from 'express'
import Calculator from '../../functions/Calculator.js'
import Message from '../../classes/Message.js'

const percentage = express()
const msg = new Message()

percentage.get('/:x?/:y?', (req, res) => {
    if(!req.params.x && !req.params.y) {
        res.status(400).send({
            message: msg.notFilled,
            status: 'ainda a modificar'
        })
    } else {
        const valX = Number(req.params.x)
        const valY = Number(req.params.y)
        if(isNaN(valX) || isNaN(valY)) {
            res.status(400).send({
                message: msg.incomplete,
                codeStatus: 400
            })
        } else {
            try {
                const result = Calculator.percentage(valX, valY)
                res.status(200).send({
                    message: `O valor ${valX} é ${result}% de ${valY} é `,
                    X: valX,
                    Y: valY,
                    Resultado: result,
                    status: 200
                })
            } catch(e) {
                res.status(500).send({
                    message: msg.fail,
                    error: e.message
                })
            }
        }
    }
})

export default percentage