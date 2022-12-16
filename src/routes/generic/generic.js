import express from 'express'
import rule from './ruleOfThree.routes.js'

const generic = express()

// Regra de três
generic.use('/proportion', rule) 

export default generic