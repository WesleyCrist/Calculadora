import express from 'express'
import Templet from '../../classes/Templet.js'

const rule = express()

rule.get('/', Templet.getNotBuild)

export default rule
