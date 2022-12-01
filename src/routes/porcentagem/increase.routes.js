import express from 'express'
import Templet from '../../classes/Templet.js'

const increase = express()

increase.get('/', Templet.getNotBuild)

export default increase
