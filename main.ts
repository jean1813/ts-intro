import prompt from 'prompt-sync'
import  {divisao, multiplicacao,  somar } from "./funcoes"

let number1 = 5
let number2 = 10

let resultado = multiplicacao(number1, number2)

//console.log(resultado)

console.log(`Resultado da soma : ${somar(number1, number2)}`)
console.log(`Resultado da divisao : ${divisao(number1, number2)}`)
console.log(`Resultado da multiplicacao : ${multiplicacao(number1, number2)}`)