const prompt = require('prompt-sync')();
const numero1 = Number(prompt('Digite a primeira nota: '));
const numero2 = Number(prompt('Digite a segunda nota: '));
let media = (numero1 + numero2)/2;
if (media >= 6) {
    console.log(`Você foi aprovado a sua nota total foi de: ${media}`);
}else{
    console.log(`Você foi reprovado, a sua média foi de: ${media}`);
}
