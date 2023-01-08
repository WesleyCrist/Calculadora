import express from 'express'

const subRoute = express()

subRoute.get('/', (req, res) => {
    res.status(200).send({
        message: 'Selecione uma das rotas para utilização',
        statuscode: 200,
        routes: {
            // Escrever todas as rotas que estão dentro de porcentagem
            percent: {
                route: '/porcentagem/percent',
                using: 'Quanto é 20% de 100?',
                example: '/porcentagem/percent/20/100'
            },
            percentage: {
                route: '/porcentagem/percentage',
                using: 'O valor 20 é qual porcentagem de 100?',
                example: '/porcentagem/percentage/20/100'
            },
            increase: {
                route: '/porcentagem/increase',
                using: 'Um valor 70 que aumentou para 100, qual foi o aumento percentual?',
                example: '/porcentagem/increase/70/100'
            },
            decreased: {
                route: '/porcentagem/decreased',
                using: 'Um valor de 100 que diminuiupara 70, qual foi a diminuição em percentual?',
                example: '/porcentagem/decreased/100/70'
            },
            over: {
                route: '/porcentagem/over',
                using: 'O valor de 8 sobre o valor de 8 é quantos em por cento?',
                example: '/porcentagem/over/8/8'
            },
            intendUp: {
                route: '/porcentagem/intendup',
                using: 'Tenho um valor de 100 e quero aumentar 20%, qual é o resultado?',
                example: '/porcentagem/intendUp/100/20'
            },
            intendDown: {
                route: '/porcentagem/intenddown',
                using: 'Tenho um valor de 100 e quero diminuir 20%, qual é o resultado?',
                example: '/porcentagem/intenddown/100/20'
            },
            increaseIn: {
                route: '/porcentagem/increasein',
                using: 'Tenho um valor inicial que aumentou em 20% e passou para 120, qual é o valor inicial?',
                example: '/porcentagem/increasein/20/120'
            },
            decreasedIn: {
                route: '/porcentagem/decreasein',
                using: 'Tenho um valor inicial que diminuiu em 20% e passou para 80, qual é o valor inicial?',
                example: '/porcentagem/decreasein/20/80'
            }
        }
    })
})

export default subRoute