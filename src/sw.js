const response = await fetch('https://www.swapi.tech/api/people/6')
const data = await response.json() // Convert the response to JSON
console.log(data) // Log the data to the console

//fetch('https://www.swapi.tech/api/people/6')
//.then((response) => response.json())
//.then((data) => {
//console.log(data)
//})
