import express from 'express'
import Templet from '../../classes/Templet.js'

const decreased = express()

decreased.get('/', Templet.getNotFound)

export default decreased