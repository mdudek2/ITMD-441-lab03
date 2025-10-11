// min/max/average function

function minMaxAverage(arr) {
  
  var sum = 0
  for(i=0; i < arr.length; i++) {
    sum = sum + arr[i]
  }

  average = sum / arr.length
  
  console.log("Total Numbers: " + arr.length + ", Min Value: " + Math.min(...arr) + 
  ", Max Value: " + Math.max(...arr) + ", Average: " + average)
}

// test arrays

let testarr = [2,5,23,6,9,4,30,1]
let testarr2 = [1,2,3,4,5,6,7,8,9,10]
let testarr3 = [5,1,6,9,2,12,9]

// call function with test arrays

minMaxAverage(testarr)
minMaxAverage(testarr2)
minMaxAverage(testarr3)