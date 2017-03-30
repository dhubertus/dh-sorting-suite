
const insertionSort = (array) => {

  for (let i = 1; i < array.length; i++) {
    let temp = array[i]

    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}


export default insertionSort
