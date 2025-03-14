const order = {
  price: 10,
  quantity: 2,
}

function calculateTotal(order) {
  return order.price * order.quantity
}
console.log(calculateTotal(order))

const person = {
  fname: 'John',
  lname: 'Doe',
}
function formatUsername(person) {
  return `${person.lname}, ${person.fname}`
}
console.log(formatUsername(person))

const phrase = {
  begin: 'Hello',
  end: 'World',
}
function combinestrings(phrase) {
  return `${phrase.begin} ${phrase.end}`
}
console.log(combinestrings(phrase))
