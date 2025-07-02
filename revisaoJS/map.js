const nums = [1, 2, 3, 4, 5]

let dobro = nums.map(function(elementos) {
    return elementos * 2
})

console.log(dobro)

console. log(nums)

const soma10 = elementos => elementos + 10
const triplo = elementos => elementos * 3
const paraDinheiro = elementos => `R$ ${parseFloat(elementos).toFixed(2).replace(".", ",")}`


console.log(nums.map(soma10))
console.log(nums.map(triplo))
console.log(nums.map(paraDinheiro))
console.log(nums.map(soma10).map(triplo).map(paraDinheiro))