const prompt = require('prompt-sync')();
let nome = Number(prompt("Digite o seu primeiro nome"));

switch (nome) {
    case (1):
        console.log("Vc digitou 1")
        break;
    case(2):
        console.log("Digitou 2")
        break;;
    case(3):
        console.log("Digitou 3");
        break;
    default:
        console.log("Numero invalido")

}

