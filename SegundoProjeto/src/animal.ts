export abstract class Animal{
    
    nome: string
    idade: number
    expVida: number

    constructor(
        nome: string,
        idade: number,
        expVida: number
    ){
        this.nome = nome
        this.idade = idade
        this.expVida = expVida
    }

    fazSom(){
        console.log('Esse Animal faz Som !')
    }
    abstract emitirSom(): void

    abstract locomocao(): void

    abstract exibirDados(): void

} 


