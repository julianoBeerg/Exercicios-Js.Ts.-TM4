import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

const prompt = require("prompt-sync")()

let cachorro = new Cachorro("Snoop", 6, 15, "Vira-lata")


let cavalo = new Cavalo("Pé de pano", 20, 30, "Cavalo do pica-pau")


let preguica = new Preguica("Sid", 3, 12, "Selva")



    console.log("1 - Cachorro")
    console.log("2 - Cavalo")
    console.log("3 - Bixo preguiça")
    let opc = Number(prompt("Escolha qual dos animais você quer ver: "))
  
    console.log    

    switch(opc){

       case 1: cachorro.exibirDados()
       break;
       case 2: cavalo.exibirDados()
       break;
       case 3: preguica.exibirDados()
       break;
        default: console.log("Opção Inválida")
        break;

    }

