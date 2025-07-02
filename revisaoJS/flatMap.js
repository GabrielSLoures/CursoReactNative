const escola = [{
    nome: "Turma A",
    alunos: [{
        nome: "Gabriel",
        nota: 6
    }, {
        nome: "João",
        nota: 8
    }, {
        nome: "Ana",
        nota: 9
    }]
    
}, {
    nome: "Turma B",
    alunos: [{
        nome: "Maria",
        nota: 7
    }, {
        nome: "Pedro",
        nota: 10
    }, {
        nome: "Brenno",
        nota: 5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)