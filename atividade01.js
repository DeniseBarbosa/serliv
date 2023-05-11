const prompt = require('prompt-sync')();
let jogador1 = Number(prompt("Jogador 1:  digite um número"));
let jogador2 = Number(prompt("Joador 2: digite um número "));


if (jogador1 === jogador2) {
    console.log("Deu empate");
    console.log("Fim do programa");
}else{
    let numeroSorteado = parseInt(Math.random()*2);
    if (numeroSorteado === 0) {
        if (jogador1 < jogador2) {
            console.log("Jogador 1 ganhou");
        }else{
            console.log("Jogador 2 ganhou");
        }
    }else{
        if (jogador1>jogador2) {
            console.log("Jogador 1 ganhou")
        } else {
            console.log("Jogador 2 ganhou")
        }
    }
}