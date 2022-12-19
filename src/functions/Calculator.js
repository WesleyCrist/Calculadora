import InvalidSequence from "../classes/InvalidSequence.js"
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

    // concluído
    static increase(x, y) {
        // Um valor 70 que aumentou para 100, qual foi o aumento percentual? = 30%
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        if(y < x) throw new InvalidSequence(msg.invalidSequence)
        return ((y - x) / x) * 100
    }

    // concluído
    static decreased(x, y) {
        // Um valor de 100 que diminuiupara 70, qual foi a diminuição em percentual?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        if(y > x) throw new InvalidSequence(msg.invalidSequence)
        return ((x - y) / x) * 100
    }

    // concluído
    static over(x, y) {
        // O valor de 8 sobre o valor de 8 é quantos em por cento?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return x * y
    }

    // concluído
    static intendUp(x, y) {
        // Tenho um valor de 100 e quero aumentar 20%, qual é o resultado?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return ((y * x) / 100) + x
    }

    // concluído
    static intendDown(x, y) {
        // Tenho um valor de 100 e quero diminuir 20%, qual é o resultado?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return x - ((y * x) / 100)
    }

    // Em desenvolvimento
    // Resultado diferende do 4devs
    static increaseIn(x, y) {
        // Tenho um valor inicial que aumentou em 20% e passou para 120, qual é o valor inicial?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return y - ((x * y) / 100)
    }

    // Em desenvolvimento
    // Resultado diferende do 4devs
    static decreasedIn(x, y) {
        // Tenho um valor inicial que aumentou em 20% e passou para 80, qual é o valor inicial?
        const msg = new Message()
        if(typeof(x) !== 'number' || typeof(y) !== 'number') throw new InvalidType(msg.notNumber)
        return y + ((x * y) / 100)
    }
}
