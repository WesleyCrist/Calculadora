import express from 'express'
import cluster from './routes/cluster.js'

const main = express()
const port = 8081

main.use(cluster)

main.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
