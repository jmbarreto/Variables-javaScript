/*nome:
sobrenome
peso
altura
dataDeInternacao
diabético
*/
const prompt = require('prompt-sync')()
const nome = prompt('digite seu nome?: ');
const sobrenome = prompt ('digite seu sobrenome: ')
const peso = prompt ('digite seu peso: ')
const altura = prompt ('digite sua altura: ')
const dataDeInternacao = prompt('digite a data que foi internado: ')
const diabetico = prompt(' digite se é ou não diabetico: ')    

console.log(`o nome digitado foi ${nome}`)
console.log(`o sobrenome digitado foi ${sobrenome}`)
console.log(`o peso é de: ${peso}`)
console.log(`a altura é de: ${altura}`)
console.log(`você foi internado na data de: ${dataDeInternacao}`)
console.log(`você é diabético: ${diabetico}`)