import { Animal } from "./animal";

export class Cavalo extends Animal{
    
    tipo: string

    constructor(
        nome: string,
        idade: number,
        expVida: number,
        tipo: string
    ){
        super(nome,idade,expVida)
        this.tipo = tipo
    }
    
    emitirSom() {
        console.log("O som que ele emite é:: iiirrrrí, rilinchin")
    }
    locomocao() {
        console.log("Como ele se locomove: o cavalo galopa")
    }

    abanarRabo(){
        console.log("Oque ele faz: o cavalo abana o rabo e a crina")
    }

    exibirDados() {
        console.log(`O nome do cavalo é: ${this.nome}\n` +
                    `A idade do cavalo é: ${this.idade}\n` +
                    `A expectativa de vida dele é: ${this.expVida}\n` +
                    `O tipo do cavalo é: ${this.tipo}`)
                    this.fazSom
                    this.emitirSom
                    this.locomocao
                    this.abanarRabo
    }   
}