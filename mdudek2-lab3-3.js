// test arrays
var arr1 = [6,2,5,0,1,56]
var arr2 = [9,5,2,1,12,45,90]
var arr3 = [17,13,34,89,2,7]

// sortNumbers function
function sortNumbers(arr) {
  arr.sort((a, b) => a - b) // sort method with compare function to avoid default alphabetical sorting behavior of sort()
  sorted_arr = arr
  return sorted_arr
}

// output
console.log("Original Array: " + arr1 + " Sorted Array: " + sortNumbers(arr1))
console.log("Original Array: " + arr2 + " Sorted Array: " + sortNumbers(arr2))
console.log("Original Array: " + arr3 + " Sorted Array: " + sortNumbers(arr3))