import express from 'express'
import Templet from '../../classes/Templet.js'

const intendUp = express()

intendUp.get('/', Templet.getNotBuild)

export default intendUp