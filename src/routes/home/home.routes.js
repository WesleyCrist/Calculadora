import express from 'express'
import Templet from '../../classes/Templet.js'
const home = express()

// Arquivo em constante mudança
home.get('/', Templet.getHome)

export default home
