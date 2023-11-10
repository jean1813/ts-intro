import prompt from 'prompt-sync'

const input = prompt()

let a: number = parseInt(input('Informe o primeiro número:' ))
let b: number = parseInt(input('Informe o segundo número:' ))
let c: number = a + b // declarando a variavel "C"

console.log(`O resultado da soma de a + b é: ${c}`)

//console.log(`calcule a soma de a + b é: ${a + b}`)
