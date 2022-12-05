import express from 'express'

import decreased from './decreased.routes.js'
import decreasedIn from './decreasedIn.routes.js'
import increase from './increase.routes.js'
import increasedIn from './increaseIn.routes.js'
import intendDown from './intendDown.routes.js'
import intendUp from './intendUp.routes.js'
import over from './over.routes.js'
import percent from './percent.routes.js'
import percentage from './percentage.routes.js'
import subRoute from './porcentagem.routes.js'

const Porcentagem = express()

Porcentagem.use('/percent', percent)
Porcentagem.use('/percentage', percentage)
Porcentagem.use('/increase', increase)
Porcentagem.use('/decreased', decreased)
Porcentagem.use('/over', over)
Porcentagem.use('/intendup', intendUp)
Porcentagem.use('intenddown', intendDown)
Porcentagem.use('increasein', increasedIn)
Porcentagem.use('decreasein', decreasedIn)
Porcentagem.use('/', subRoute)

export default Porcentagem
