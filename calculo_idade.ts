import prompt from 'prompt-sync'

export function calcularIdade(ano: number):number {
    return new Date().getFullYear() - ano
    
}