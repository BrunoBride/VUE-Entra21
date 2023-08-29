const req = require('prompt-sync')
const prompt = req()

// 13.	Determine se um número é primo ou não

let num = Number(prompt("Digite um número: "))
let divisor = 0

for (let i = 1; i < num; i++)
    if (num % i == 0) {
        divisor++
    } if (divisor == 2) {
        console.log("O número é Primo")
    } else {
    console.log("O número não é Primo")
}