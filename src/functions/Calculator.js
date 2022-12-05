import Message from "../classes/Message.js"

export default class Calculator {

    constructor() {}

    // Concluído
    static percent(x, y) {
        // Quanto é 20% de 100 = 20
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return (x * y) / 100
    }

    // Concluído
    static percentage(x, y) {
        // O valor 20 é qual porcentagem de 100 = 20%
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return (x * 100) / y
    }

    // Em desenvolvimento
    static increase(x, y) {
        // Um valor 70 que aumentou para 100, qual foi o aumento percentual? = 30%
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return ((y - x) / y) * 100
    }

    // Em desenvolvimento
    static decreased(x, y) {
        // Um valor de 100 que diminuiupara 70, qual foi a diminuição em percentual?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return Calculator.percentage(y, x)

        // em construção
    }

    // Em desenvolvimento
    static over(x, y) {
        
        /**
         * 
         *  Não entendi como funciona o calculo
         * 
         */

        // em construção
    }

    // Em desenvolvimento
    static intendUp(x, y) {
        
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        // return 

        /**
         * 
         *  Tenho um valor de X e quero aumentar y, qual é o resultado?
         *  Y é recebido em porcentagem
         *  A resposta é um number
         * 
         *  ex: Tenho um valor de 100 e quero aumentar 20%, qual é o resultado?
         *  res: 120
         * 
         */


        // em construção
    }

    // Em desenvolvimento
    static intendDown(x, Y) {

        /**
         * 
         *  Tenho um valor de X e quero diminuir y, qual é o resultado?
         *  Y é recebido em porcentagem
         *  A resposta é um number
         * 
         *  ex: Tenho um valor de 100 e quero diminuir 20%, qual é o resultado?
         *  res: 80
         * 
         */

        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)

        // em construção
        
    }

    // Em desenvolvimento
    static increaseIn(x, y) {

        /**
         * 
         *  Tenho um valor inicial que aumentou em X e passou para Y, qual é o valor inicial?
         *  X é recebido em porcentagem
         *  A resposta é um number
         * 
         *  ex: Tenho um valor inicial que aumentou em 20% e passou para 120, qual é o valor inicial?
         *  res: 100
         * 
         */

        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)

        // em construção
    }

    // Em desenvolvimento
    static decreasedIn(x, y) {

        /**
         * 
         *  Tenho um valor inicial que diminuiu em X e passou para Y, qual é o valor inicial?
         *  X é recebido em porcentagem
         *  A resposta é um number
         * 
         *  ex: Tenho um valor inicial que aumentou em 20% e passou para 80, qual é o valor inicial?
         *  res: 100
         * 
         */

        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)

        // em construção
        
    }
}
