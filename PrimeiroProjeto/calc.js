const prompt = require("prompt-sync")()

console.log("Qual operação deseja realizar?\n" + 
            "1) Soma / 2)Subtração / 3)Multiplicação / 4)Divisão")
oper = Number(prompt())

console.log("Digite um número: ")
num1 = Number(prompt())

console.log("Digite um número: ")
num2 = Number(prompt())

soma = num1 + num2
sub = num1 - num2
mult = num1 * num2
div = num1 / num2

if ( oper == 1 ){
    console.log(`Resultado: ${soma.toFixed(2)}`)
} else if (oper == 2){
    console.log(`Resultado: ${sub.toFixed(2)}`)
} else if (oper == 3){
    console.log(`Resultado: ${mult.toFixed(2)}`)
} else if (oper == 4){
    console.log(`Resultado: ${div.toFixed(2)}`)
} else{
    console.log("Opção inválida digite um valor válido!")
}