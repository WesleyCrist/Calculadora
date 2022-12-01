import express from 'express'
import Templet from '../../classes/Templet.js'

const decreasedIn = express()

decreasedIn.get('/', Templet.getNotBuild)

export default decreasedIn