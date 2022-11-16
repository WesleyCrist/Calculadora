class Calculator {

    constructor() {}

    static percent(x, y) {
        if(typeof(x) !== 'number') throw new InvalidType('O argumento passado não é do tipo "number"')
        if(typeof(y) !== 'number') throw new InvalidType('O argumento passado não é do tipo "number"')
        return (x * y) / 100
    }

    static percentage() {
        // em construção
    }

    static increase() {
        // em construção
    }

    static decreased() {
        // em construção
    }
}

export default Calculator
