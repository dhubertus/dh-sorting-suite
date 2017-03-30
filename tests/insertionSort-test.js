import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
import randomNumGenerator from '../scripts/numberGen'
import randomLetGenerator from '../scripts/letterGen'

describe('insertionSort', () => {

  it('insertionSort is a function', () => {
    assert.isFunction(insertionSort)
  })

  it('insertionSort should take in an array', () => {
    let array = randomNumGenerator(5)
    let array2 = randomLetGenerator(5)

    assert.isArray(array)
    assert.isArray(array2)
  })

  it('insertionSort takes in num or alpha array and sorts it inplace', () => {
    let array = randomNumGenerator(5)
    let array2 = randomLetGenerator(5)

    insertionSort(array)

    assert.deepEqual(array, array.sort())
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort large arrays of numbers and letters', () => {
    let array = randomNumGenerator(17000)
    let array2 = randomLetGenerator(17000)

    insertionSort(array)
    insertionSort(array2)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort all capital letters', () => {
    let array = ['G', 'F', 'I', 'P', 'C', 'A', 'K', 'L']

    insertionSort(array)

    assert.deepEqual(array, array.sort())
  })

  it('should sort negative numbers and positive numbers', () => {
    let array = [3, 6, 8, -5, -10, 4, 10, 15, 34, -50, -25]

    insertionSort(array)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
  })

})
