const student1 = {
  name: 'Sarah',
  course: 'JavaScript',
  grade: 95,
}
const student2 = {
  name: 'James',
  course: 'English',
  grade: 85,
}
const student3 = {
  name: 'Trisha',
  course: 'Algebra',
  grade: 99,
}

function displayStudentInfo(student) {
  return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%.`
}

console.log(displayStudentInfo(student1))
console.log(displayStudentInfo(student2))
console.log(displayStudentInfo(student3))
