import express from 'express'
import Templet from '../../classes/Templet.js'

const circle = express()

circle.get('/', Templet.getNotBuild)

export default circle
