import express from 'express'
import Validation from '../../classes/Validation.js'
import Message from '../../classes/Message.js'

const increase = express()
const msg = new Message()

// increase é index 2
increase.get('/:x?/:y?', (req, res) => {
    try {
        const validate = new Validation(req.params.x, req.params.y, 2)
        const response = validate.run()
        res.status(response.status).send(response)
    } catch(e) {
        res.status(500).send({
            message: msg.fail,
            error: e.message 
        })
    }
})

export default increase
