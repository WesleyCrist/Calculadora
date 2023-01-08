import Unusual from "../classError/Unusual.js"
import Calculator from "../functions/Calculator.js"
import Message from "./Message.js"

export default class Validation {

    /**
     * 
     * index array
     * 0 = percent
     * 1 = percentage
     * 2 = increase
     * 3 = decreased
     * 4 = over
     * 5 = intendup
     * 6 = intenddown
     * 7 = increasein
     * 8 = decreasein
     * 
     */

    #num1
    #num2
    #result
    #index
    #status
    #reply
    #statusCode = {
        ok: 200,
        badRequest: 400
    }

    constructor(val1, val2, i) {
        // Verificação do index
        if(typeof(i) === 'number' && i >= 0 && i < 9) {
            this.#index = i
        } else {
            throw new Unusual('Algo de errado não está certo!')
        }
        // Verificação dos valores
        if(!val1 && !val2) {
            // Parâmetros não preenchidos
            this.#status = 2
        } else {
            this.#num1 = Number(val1)
            this.#num2 = Number(val2)
            if(isNaN(this.#num1) || isNaN(this.#num2)) {
                // Parâmetros incompletos ou diferentes de number
                this.#status = 3
            } else {
                // sucesso
                this.#status = 1
            }
        }
        this.#work()
    }

    // entrega
    run() {
        return this.#reply
    }

    // executa todo o trabalho
    #work() {
        switch (this.#status) {
            case 1:
                this.#status1(this.#num1, this.#num2, this.#index)
            break;
            case 2:
                this.#status2()
            break;
            case 3:
                this.#status3()
            break;
        }
    }

    /*
    // Melhorias futuras, substituição das funções status1, 2 e 3 pela effect
    #effect(i) {
        const func = [
            function() {
                console.log('função 1')
                // função de sucesso
            },
            function() {
                console.log('função 2')
                // função de vazia
            },
            function() {
                console.log('função 3')
                // função de falha
            }
        ]
        return func[i]
    }
    */

    // success
    #status1(val1, val2, i) {
        switch (i) {
            // 0 = percent
            case 0:
                this.#result = Calculator.percent(val1, val2)
                this.#reply = {
                    message: `${this.#num1}% de ${this.#num2} é ${this.#result}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 1 = percentage
            case 1:
                this.#result = Calculator.percentage(val1, val2)
                this.#reply = {
                    message: `O valor ${this.#num1} é ${this.#result}% de ${this.#num2}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 2 = increase
            case 2:
                this.#result = Calculator.increase(val1, val2)
                this.#reply = {
                    message: `Um valor ${this.#num1} que aumentou para ${this.#num2} teve um aumento percentual de ${this.#result}%`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 3 = decreased
            case 3:
                this.#result = Calculator.decreased(val1, val2)
                this.#reply = {
                    message: `A diminuição percentual do valor ${this.#num1} que passou para ${this.#num2} foi de ${this.#result}%`,
                    X: this.#num1,
                    Y: this.#num2,
                    Result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 4 = over
            case 4:
                this.#result = Calculator.over(val1, val2)
                this.#reply = {
                    message: `O valor de ${this.#num1} sobre o valor de ${this.#num2} é ${this.#result}%`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 5 = intendUP
            case 5:
                this.#result = Calculator.intendUp(val1, val2)
                this.#reply = {
                    message: `O valor de ${this.#num1} como aumento de ${this.#num2}% vai pra ${this.#result}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 6 = intendDown
            case 6:
                this.#result = Calculator.intendDown(val1, val2)
                this.#reply = {
                    message: `O valor de ${this.#num1} como diminuição de ${this.#num2}% vai pra ${this.#result}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            // 7 = increaseIn
            case 7:
                this.#result = Calculator.increaseIn(val1, val2)
                this.#reply = {
                    message: `O valor que aumentou em ${this.#num1}% e passou para ${this.#num2} é de ${this.#result}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
            case 8:
                this.#result = Calculator.decreasedIn(val1, val2)
                this.#reply = {
                    message: `O valor que diminuiu em ${this.#num1}% e passou para ${this.#num2} é de ${this.#result}`,
                    X: this.#num1,
                    Y: this.#num2,
                    result: this.#result,
                    status: this.#statusCode.ok
                }
            break;
        }
    }

    // empty
    #status2() {
        const msg = new Message()
        this.#reply = {
            message: msg.notFilled,
            status: this.#statusCode.badRequest
        }
    }

    // failure
    #status3() {
        const msg = new Message()
        this.#reply = {
            message: msg.incomplete,
            status: this.#statusCode.badRequest
        }
    }
}
