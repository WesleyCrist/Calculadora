import express from 'express'
import Validation from '../../classes/Validation.js'
import Message from '../../classes/Message.js'

const increasedIn = express()
const msg = new Message()

// increasedIn é index 7
increasedIn.get('/:x?/:y?', (req, res) => {
    try {
        const validate = new Validation(req.params.x, req.params.y, 7)
        const response = validate.run()
        res.status(response.status).send(response)
    } catch(e) {
        res.status(500).send({
            message: msg.fail,
            error: e.message 
        })
    }
})

export default increasedIn