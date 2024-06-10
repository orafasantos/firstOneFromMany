function collectStudentData() {
  let students = []

  for (let student = 0; student < 4; student++) {
    let studentName = prompt("Digite o nome do aluno:")
    let firstGrade = Number(prompt("Digite aqui a primeira nota:"))
    let secondGrade = Number(prompt("Digite aqui a segunda nota:"))

    let average = (firstGrade + secondGrade) / 2
    average = average.toFixed(2)
    let result = average > 7 ? "aprovado" : "reprovado"

    students[student] = {
      name: studentName,
      firstGrade: firstGrade,
      secondGrade: secondGrade,
      average: average,
      result: result,
    }
  }

  return students
}
function calculateAverage(name, firstGrade, secondGrade) {
  let average = (firstGrade + secondGrade) / 2
  average = average.toFixed(2)
  let result = average > 7 ? "aprovado" : "reprovado"

  return {
    name: name,
    firstGrade: firstGrade,
    secondGrade: secondGrade,
    average: average,
    result: result,
  }
}

function displayStudents(students) {
  for (let student of students) {
    alert(
      `O(a) aluno(a) ${student.name} com a Primeira Nota: ${student.firstGrade} e a Segunda Nota: ${student.secondGrade}\nObteve a Média: ${student.average}\nSendo o(a) estudante ${student.result}(a) de acordo com os resultados.`
    )
  }
}

let studentList = collectStudentData()
displayStudents(studentList)
