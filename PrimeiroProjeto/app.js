const prompt = require("prompt-sync")()

num1 = Number(prompt("Digite o 1° número: "))

num2 = Number(prompt("Digite o 2° número: "))

num3 = Number(prompt("Digite o 3° número: "))

if (num1 > num2 && num1 > num3) {
    console.log(`O 1º número é o maior, ${num1}.`)
} else if ( num2 > num1 && num2 > num3 ){
    console.log(`O 2º número é o maior, ${num2}.`)
} else if ( num3 > num1 && num3 > num1 ){
    console.log(`O 3º número é o maior, ${num3}.`)
}