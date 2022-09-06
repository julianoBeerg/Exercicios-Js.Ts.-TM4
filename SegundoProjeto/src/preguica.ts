import { Animal } from "./animal";

export class Preguica extends Animal{
    
    habitat: string

    constructor(
        nome: string,
        idade: number,
        expVida: number,
        habitat: string
    ){
        super(nome,idade,expVida)
        this.habitat = habitat
    }
    
    emitirSom() {
        console.log("O som que ele emite é: aaaaaah, aaaarh")
    }

    locomocao() {
        console.log("Como ele se locomove: o bixo preuiça sobe em arvores")
    }

    dorme(){
        console.log("Oque ele faz: o bixo precuiça dorme")
    }
    exibirDados() {
        console.log(`O nome do bixo preguiça é: ${this.nome}\n` +
                `A idade do bixo preguiça é: ${this.idade}\n` +
                `A expectativa de vida dele é: ${this.expVida}\n` +
                `A habitat do bixo preguiça é: ${this.habitat}\n`)
                this.fazSom()
                this.emitirSom()
                this.locomocao()
                this.dorme()
    }

}