import express from 'express'
import dotenv from 'dotenv'
import cluster from './routes/cluster.js'

const main = express()
dotenv.config()
main.use(cluster)
// Prática de segurança recomendada pelo express
main.disable('x-powerred-by')

main.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))
