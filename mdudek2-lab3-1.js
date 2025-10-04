// test array
const testarr = [2,5,23,6,9,4,30,1]

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

// call function with test array
minMaxAverage(testarr)