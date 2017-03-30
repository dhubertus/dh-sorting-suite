
const reduceArray = (unsortedArray) => {

  let median = unsortedArray.length / 2
  let end = unsortedArray.length
  let leftArgument = unsortedArray.slice(0, median)
  let rightArgument = unsortedArray.slice(median, end)

  if (unsortedArray.length === 1) {
    return unsortedArray;
  }

  return mergeArrays(reduceArray(leftArgument), reduceArray(rightArgument))
}


const mergeArrays = (leftArgument, rightArgument) => {

  let mergedArray = []

  while (leftArgument.length > 0 && rightArgument.length > 0) {
    if (leftArgument[0] >= rightArgument[0]) {
      mergedArray.push(rightArgument.shift())
    } else {
      mergedArray.push(leftArgument.shift())
    }
  }

  while (leftArgument.length > 0) {
    mergedArray.push(leftArgument.shift())
  }

  while (rightArgument.length > 0) {
    mergedArray.push(rightArgument.shift())
  }
  
  return mergedArray
}

export default reduceArray
