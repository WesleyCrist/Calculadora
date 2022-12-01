import express from 'express'
import Templet from '../../classes/Templet.js'

const decreased = express()

decreased.get('/', Templet.getNotBuild)

export default decreased