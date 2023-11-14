import prompt from 'prompt-sync'
import { forEachChild } from 'typescript'

const input = prompt()

let codigoProduto: number [] = []
let precoProduto: number [] = []
let maiorValor: number = 0

let cont: number = 0

while (cont <= 15) {
    codigoProduto[cont] = parseInt(input('Informe o codigo do produto: '))
    precoProduto[cont] = parseFloat(input('Informe o valor do produto: '))
    cont++    // = cont + 1
}

for (let index = 0; index < precoProduto.length; index++) {
    if (precoProduto[index] > maiorValor){
        maiorValor = precoProduto[index]
    
}

}

