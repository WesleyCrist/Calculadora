import express from 'express'
import Validation from '../../classes/Validation.js'
import Message from '../../classes/Message.js'

const intendDown = express()
const msg = new Message()

// intendDown é index 6
intendDown.get('/:x?/:y?', (req, res) => {
    try {
        const validate = new Validation(req.params.x, req.params.y, 6)
        const response = validate.run()
        res.status(response.status).send(response)
    } catch(e) {
        res.status(500).send({
            message: msg.fail,
            error: e.message 
        })
    }
})

export default intendDown