const alunos = [
    {nome: 'João', nota: 7.3},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Pedro', nota: 9.8}
]

// IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log((total1 / alunos.length).toFixed(2))

// DECLARATIVO 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log((total2 / alunos.length).toFixed(2))