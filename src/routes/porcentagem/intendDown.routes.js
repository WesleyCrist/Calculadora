import express from 'express'
import Templet from '../../classes/Templet.js'

const intendDown = express()

intendDown.get('/', Templet.getNotBuild)

export default intendDown