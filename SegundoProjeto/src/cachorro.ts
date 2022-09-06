import { Animal } from "./animal";

export class Cachorro extends Animal{
    
    raca: string

    constructor(
        nome: string,
        idade: number,
        expVida: number,
        raca: string
    ){
        super(nome,idade,expVida)
        this.raca = raca
    }

    emitirSom() {
       console.log("O som que ele emite é:: Auau")
    }

    locomocao() {
        console.log("Como ele se locomove: O cachorro corre")
    }

    abanarRabo(){
        console.log("Oque ele faz: o cachorro abana o rabo")
    }

    exibirDados() {
        console.log(`O nome do cachorro é: ${this.nome}\n` +
                    `A idade do cachorro é: ${this.idade}\n` +
                    `A expectativa de vida dele é: ${this.expVida}\n` +
                    `A raça do cachorro é: ${this.raca}`)
                    this.fazSom
                    this.emitirSom
                    this.locomocao
                    this.abanarRabo
    }


    
}