class Calc {
    static #value = ''
    static #NAME = 'calc'
    static #isDot = false
    static #isResult = false
    static #memoryValue = 0

    static add = (newValue) => {
        if (isNaN(this.#value[this.#value.length - 2])) {
            if (
                Number(this.#value[this.#value.length - 1]) === 0 &&
                this.#isDot == false
            ) {
                return null
            }
        }

        this.#value = this.#value.concat(newValue)
        this.#output()
        console.log(this.#value)
    }

    static #output = () => {
        // this.#save()
        window.output.innerHTML = this.#value
    }

    static dot = () => {
        if (this.#isDot) {
            return null
        }

        this.#value = this.#value.concat('.')
        this.#output()
        this.#isDot = true
    }

    static op = (opValue) => {
        if (isNaN(this.#value[this.#value.length - 1])) {
            return null
        }

        this.#value = this.#value.concat(opValue)
        this.#output()
        console.log(this.#value)
        this.#isDot = false
    }

    static reset = () => {
        this.#value = ''
        this.#isDot == false
        this.#output()
    }

    static result = () => {
        this.#value = String(eval(this.#value))
        this.#output()
        console.log(this.#value)
        this.#isResult = true
        this.memoryAdd()
    }

    static memoryRecall = () => {
        this.#value = String(this.#memoryValue)
        console.log(this.#value)
        this.#output()
        this.#value = ''
    }

    static memoryClear = () => {
        window.localStorage.removeItem('memory')
    }

    static memoryAdd = () => {
        if (this.#isResult) {
            this.#memoryValue += parseFloat(this.#value)
            window.localStorage.setItem(
                'memory',
                this.#memoryValue,
            )
            console.log(this.#value)
            this.#isResult = false
        }
        this.#value = ''
    }
}

// Calc.init()

window.calc = Calc