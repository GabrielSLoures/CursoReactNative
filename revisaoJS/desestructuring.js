var cliente = {
    nome: "Gabriel",
    idade: 19,
    endereco: {
        quadra: "SQNW 309",
        bloco: "B",
        apartamento: "211"
    }
}

const{ nome, idade, endereco: { quadra, bloco, apartamento } } = cliente

console.log(nome, idade, quadra, bloco, apartamento)

console.log()

function randObj({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const numeroAleatorio1 = randObj({})
console.log(numeroAleatorio1)

const numeroAleatorio2 = randObj({ max: 50 })
console.log(numeroAleatorio2)

const numeroAleatorio3 = randObj({ min: 900 })
console.log(numeroAleatorio3)

const numeroAleatorio4 = randObj({ min: 10, max: 20 })
console.log(numeroAleatorio4)

console.log()

function randArray([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const numeroAleatorio5 = randArray([])
console.log(numeroAleatorio5)

const numeroAleatorio6 = randArray([50, 0])
console.log(numeroAleatorio6)

const numeroAleatorio7 = randArray([500])
console.log(numeroAleatorio7)
