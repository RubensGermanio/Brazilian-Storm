const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let maior = notas[0];
let menor = notas[0];
let soma = 0;
let media = 0;

for (let onda of notas) {
    if (onda > maior) {
        maior = onda;
    } else if (onda < menor) {
        menor = onda;
    }
}
for (let calculo of notas) {
    soma += calculo
}
media = (soma - maior - menor) / (notas.length - 2);

console.log(media);