import express from 'express'
import circle from './circle.routes.js'

const area = express()

area.use('/circle', circle)

export default area