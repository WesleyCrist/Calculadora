import express from 'express'
import Templet from '../../classes/Templet.js'

const increasedIn = express()

increasedIn.get('/', Templet.getNotBuild)

export default increasedIn