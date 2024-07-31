const string = "oi"
const number = 3
const boolean = false

console.log(typeof string, typeof number, typeof boolean)

const firstName = "Gabriel"
const lastName = " Melo"
const phrase = firstName + lastName
const template = `${firstName} ${lastName}`

console.log(phrase,template)

console.log(`${number} é o numero da sorte do`, firstName)

let n = 9
console.log(n)

n = 10

console.log(n)

const chuva = true

if(chuva) {
    console.log("guardaChuva")
} else {
    console.log("não")

}

const phras2 = "olá"
console.log(phras2.toUpperCase())

const n2 = 10
const n3 = "10"

console.log(String(n2),Number(n3))

function login() {
    const senha = '123'
    const login = 'abc'

    const enhainformada = '324'
    const logininformado = 'acs'

    return(senha === enhainformada && login === logininformado)
}

console.log(login())

const a = true
const v = false

console.log((a === true || v === true))