import colors from 'colors';

let primeCount = 0

let [primeStart, primeEnd] = process.argv.slice(2)

const colorsPallete = [colors.green, colors.yellow, colors.red]

if (!primeStart || !primeEnd) {
    console.log(colors.red('Ввидите число'))
} else {
    for (let i = parseInt(primeStart); i <= parseInt(primeEnd); i++) {
        let isPrime = true

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
            }
        }

        if (isPrime) {
            console.log(colorsPallete[primeCount % 3](i))
            primeCount++
        }
    }

}

