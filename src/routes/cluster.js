import express from 'express'

import generic from './generic/generic.js'
import area from './area/area.js'
import Porcentagem from './porcentagem/porcentagem.js'
import none from './notFound/nonexistent.routes.js'
import home from './home/home.routes.js'

const cluster = express()

cluster.use('/generic', generic)
cluster.use('/area', area)
cluster.use('/porcentagem', Porcentagem)
cluster.use('/', home)
cluster.use(none)

export default cluster
