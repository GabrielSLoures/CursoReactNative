// const aprovados = ["Gabriel", "Ana", "Carlos", "Maria"];

// aprovados.forEach(function(nome, indice) {
//     console.log(`${indice + 1}) ${nome}`)
// })

// aprovados.forEach(nome => console.log(nome))

// const exibirAprovados = aprovado => console.log(aprovado)

// aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ["Gabriel", "Ana", "Carlos", "Maria"];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})