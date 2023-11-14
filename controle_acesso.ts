import prompt from 'prompt-sync'

const input = prompt()

const usuarioSistema: number = 1234
const senhaUsuarioSistema: string = '9999'

let usuario: number
let senha: string

usuario = parseInt(input('Informe seu codigo de acesso: '))
senha = input('Informe a sua senha de acesso: ')

if (usuarioSistema !== usuario) {
    console.log(`Usuario invalido!`)
} else {

    if (senhaUsuarioSistema !== senha) {
        console.log(`Senha incorreta!`)

    } else {
        console.log(`Acesso permitido!`)
    }    
}

//if (usuarioSistema === usuario && senhaUsuarioSistema === senha) {
//   console.log(`Acesso permitido!`)
//} else {
//   console.log(`Usuario ou senha invalidas!`)
//}