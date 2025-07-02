class Pessoa {
    constructor(nome, idade, altura, endereco = {}){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.endereco =  {
            quadra: endereco.quadra = "Quadra não informada",
            bloco: endereco.bloco = "Bloco não informado",
            apartamento: endereco.apartamento = "Apartamento não informado"
        
        }
    }
    toString() {
        let endereco = `Endereco: ${this.endereco.quadra}, ${this.endereco.bloco}, ${this.endereco.apartamento}`
        return `Dados Pessoais:\n\nNome: ${this.nome || 'Nome não informado'}\nIdade: ${this.idade !== null ? this.idade : 'não informada'}\nAltura: ${this.altura !== null ? this.altura : 'não informada'}\n${endereco}`;
    }
}

var pessoa1 = new Pessoa()

pessoa1.nome = "Gabriel"
pessoa1.idade = 19
pessoa1.altura = 1.7
pessoa1.endereco.quadra = "SQNW 309"
pessoa1.endereco.bloco = "Bloco B"
pessoa1.endereco.apartamento = "Apartamento 211"

console.log(String(pessoa1))