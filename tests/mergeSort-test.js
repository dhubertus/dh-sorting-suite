import { assert } from 'chai';
import reduceArray from '../scripts/mergeSort'
import randomNumGenerator from '../scripts/numberGen'
import randomLetGenerator from '../scripts/letterGen'


describe('mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(reduceArray)
  })

  it('mergeSort should take in an array', () => {
    let array = randomNumGenerator(5)

    assert.isArray(array)
  })

  it('should sort an unsorted numerical array or alphabetical array', () => {
    let array = randomNumGenerator(20)
    let array2 = randomLetGenerator(20)

    reduceArray(array)
    reduceArray(array2)

    assert.deepEqual(array, array.sort())
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort large arrays of numbers and letters', () => {
    let array = randomNumGenerator(140000)
    let array2 = randomLetGenerator(140000)

    reduceArray(array)
    reduceArray(array2)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort all capital letters', () => {
    let array = ['G', 'F', 'I', 'P', 'C', 'A', 'K', 'L']

    reduceArray(array)

    assert.deepEqual(array, array.sort())
  })

  it('should sort negative numbers and positive numbers', () => {
    let array = [3, 6, 8, -5, -10, 4, 10, 15, 34, -50, -25]

    reduceArray(array)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
  })

})
