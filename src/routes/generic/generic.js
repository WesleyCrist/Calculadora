import express from 'express'
import rule from './ruleOfThree.routes.js'

const generic = express()

generic.use('/proportion', rule) // Regra de três

export default generic