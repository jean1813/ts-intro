import prompt from 'prompt-sync'

const input = prompt()

let qtdMorango:number = 6
let qtdMaca :number = 8
let valorMorangoPagar:number
let valorMacaPagar:number
let valorFinal:number

// Precifica o morango de acordo a quantidade

if (qtdMorango <= 5) {
    valorMorangoPagar = qtdMorango * 2.5
} else {
    valorMorangoPagar = qtdMorango * 2.2
}

// Precifica a maçã de acordo a quantidade

if (qtdMaca <= 5) {
    valorMacaPagar = qtdMaca * 1.8
} else {
    valorMacaPagar = qtdMaca * 1.5
}

valorFinal = valorMorangoPagar + valorMacaPagar

if (valorFinal < 25) {
    console.log(`Desconto: R$ ${(valorFinal * 0.1).toFixed(2)}`);
    console.log(`Valor à pagar R$: R$ ${(valorFinal - (valorFinal * 0.1)).toFixed(2)}`);
} else {
    console.log(`Valor à pagar R$: R$ ${valorFinal.toFixed(2)}`);
}
//let valor
//let fruta : number = parseInt(input('Escolha uma fruta : 1 - morango | 2 - maca : '))
//let quantidade : number = parseInt(input('Informe a quantidade de kg: '))


//if (valor) {
  //  console.log(`se o cliente comprar ate 5kg em frutas `)
//} else {
    
//}