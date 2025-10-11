// function definition

function celsiusToFahrenheit(temp_c) {
  return ((temp_c * (9/5)) + 32)
}

// test values

let test1 = 0
let test2 = 72
let test3 = 100

// output

console.log(test1 + " celsius = " + celsiusToFahrenheit(test1) + " fahrenheit.")
console.log(test2 + " celsius = " + celsiusToFahrenheit(test2) + " fahrenheit.")
console.log(test3 + " celsius = " + celsiusToFahrenheit(test3) + " fahrenheit.")