import express from 'express'
import Templet from '../../classes/Templet.js'
const none = express()

// Tramento para para digitação inválida de URL
none.use(Templet.getNotFound)

export default none
