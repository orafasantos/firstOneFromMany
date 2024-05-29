// Variable declarations
let name
let number1
let number2

// Variable assignment
name = prompt("Qual seu nome?")
let greetins = alert(
  `Olá ${name}, a seguir vamos realizar algumas operações matemáticas.`
)

number1 = prompt("Insira o primeiro número:")
number2 = prompt(`Insira o segundo número:`)

// Var Operations
let sumResult = Number(number1) + Number(number2)
let subResult = Number(number1) - Number(number2)
let divResult = Number(number1) / Number(number2)
let resDiv = Number(number1) % Number(number2)

alert(`${name} o resultado da soma é ${sumResult}`)
alert(`O resultado da subtração é ${subResult}`)
alert(`O resultado da divisão é ${divResult}`)
alert(`O resto de sua divisão é ${subResult}`)

if (sumResult % 2 === 0) {
  alert(`E o resultado da sua soma é um número par.`)
} else {
  alert("E o resultado da sua soma é um número impar.")
}
