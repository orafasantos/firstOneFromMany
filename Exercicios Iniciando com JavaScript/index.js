/* 
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
 */
alert(`Hello World`)

/* 
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/

/* let number1
let number2
let message

number1 = prompt(`Digite aqui um número a ser somado`)
number2 = prompt(`Digite aqui o segundo número a ser somado`)
sumResult = Number(number1) + Number(number2)
message = alert(`A soma dos números é ${sumResult} `)
message() */

/*  

3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". 

*/

let isNumber = 5

if (typeof isNumber === "number") {
  alert(`O resultado é um número`)
} else {
  alert(`Não é um número`)
}

/* 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */

let isString

isString = `Isso é uma string`

if (typeof isString === "string") {
  alert(`O resultado é uma string`)
} else {
  alert(`Não é uma string`)
}

/* 
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */

let isBoolean = true

if (typeof isBoolean === "boolean") {
  alert(`O resultado é um booleano`)
} else {
  alert(`Não é um booleano`)
}

/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */

let number1 = prompt("Insira o primeiro número:")
let number2 = prompt(`Insira o segundo número:`)

let subResult = Number(number1) - Number(number2)

alert(subResult)

/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */

let multResult = Number(number1) * Number(number2)

alert(multResult)

/* 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divResult = Number(number1) / Number(number2)
alert(divResult) */

/* 9
Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */

/* 10
Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */
let numberCheck = 22

if (numberCheck % 2 === 0) {
  alert(`O número é par.`)
} else {
  alert("O número é impar.")
  } 
  
  
