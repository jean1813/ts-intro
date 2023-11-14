import prompt from 'prompt-sync'

const input = prompt()

//let numero 
//let usuario
//let codigo = 0
//let continua = true

//let senha: number = 9999
//let usuario: number = 1234

let usuario: number = parseInt(input('Digite seu numero de usuario: '))
let senha: number = parseInt(input('Digite uma senha: ' ))
//let codigo: number = parseInt(input('Digite seu código: ' ))

if (usuario === 1234) {
    console.log(`Sua codigo sera diferente`)
    

} else {
    console.log(`Usuario inválido`)

}

if (senha !== 9999) {
    console.log(`Sua senha sera diferente`)
    

} else {
    console.log(`Senha incorreta`)

}