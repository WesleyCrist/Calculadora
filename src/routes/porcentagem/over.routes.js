import express from 'express'
import Templet from '../../classes/Templet.js'

const over = express()

over.get('/', Templet.getNotFound)

export default over