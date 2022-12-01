import express from 'express'
import Templet from '../../classes/Templet.js'

const percentage = express()

percentage.get('/', Templet.getNotBuild)

export default percentage