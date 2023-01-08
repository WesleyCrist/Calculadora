import express from 'express'
import Validation from '../../classes/Validation.js'
import Message from '../../classes/Message.js'

const over = express()
const msg = new Message()

// over é index 4
over.get('/:x?/:y?', (req, res) => {
    try {
        const validate = new Validation(req.params.x, req.params.y, 4)
        const response = validate.run()
        res.status(response.status).send(response)
    } catch(e) {
        res.status(500).send({
            message: msg.fail,
            error: e.message 
        })
    }
})

export default over