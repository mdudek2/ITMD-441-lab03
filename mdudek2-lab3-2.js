// function definition

function countVowels(word) {
  
  var count = 0
  for(i = 0; i < word.length; i++) {
    if (/[aeiou]/i.test(word[i])) {
        count +=1;
    }
  }
  
  return count
}

// strings to test

let s1 = "teststring"
let s2 = "Apple Pie"
let s3 = "Illinois Tech"


// output
console.log(s1 + ": vowels: " + countVowels(s1))
console.log(s2 + ": vowels: " + countVowels(s2))
console.log(s3 + ": vowels: " + countVowels(s3))