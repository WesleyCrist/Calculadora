import express from 'express'
import home from "./home.routes.js";
import percent from './percent.routes.js';
import increase from './increase.routes.js';
import none from './nonexistent.routes.js';
import decreased from './decreased.routes.js';

const cluster = express()

// Aglomeração de todas as rotas da aplicação
cluster.use('/', home)
cluster.use('/percent', percent)
cluster.use('/increase', increase)
cluster.use('/decreased', decreased)
cluster.use(none)

export default cluster
