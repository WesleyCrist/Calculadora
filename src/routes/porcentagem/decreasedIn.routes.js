import express from 'express'
import Message from '../../classes/Message.js'
import Validation from '../../classes/Validation.js'

const decreasedIn = express()
const msg = new Message()

// decreasedIn é index 8
decreasedIn.get('/:x?/:y?', (req, res) => {
    try {
        const validate = new Validation(req.params.x, req.params.y, 8)
        const response = validate.run()
        res.status(response.status).send(response)
    } catch(e) {
        res.status(500).send({
            message: msg.fail,
            error: e.message 
        })
    }
})

export default decreasedIn