import express from 'express'
import Templet from '../../classes/Templet.js'

const over = express()

over.get('/', Templet.getNotBuild)

export default over