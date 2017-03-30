import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import randomNumGenerator from '../scripts/numberGen'
import randomLetGenerator from '../scripts/letterGen'


describe('bubbleSort', () => {

  it('bubbleSort is a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('bubbleSort should take in an array that has a specific length', () => {
    let array = randomNumGenerator(20)
    let array2 = randomLetGenerator(10)

    assert.isArray(array)
    assert.isArray(array2)

    assert.equal(array.length, 20)
    assert.equal(array2.length, 10)
  })

  it('bubbleSort takes in num or alpha array and returns sorted array', () => {
    let array = randomNumGenerator(20)
    let array2 = randomLetGenerator(20)

    bubbleSort(array)
    bubbleSort(array2)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort large arrays of numbers and letters', () => {
    let array = randomNumGenerator(10000)
    let array2 = randomLetGenerator(10000)

    bubbleSort(array)
    bubbleSort(array2)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
    assert.deepEqual(array2, array2.sort())
  })

  it('should be able to sort all capital letters', () => {
    let array = ['G', 'F', 'I', 'P', 'C', 'A', 'K', 'L']

    bubbleSort(array)

    assert.deepEqual(array, array.sort())
  })

  it('should sort negative numbers and positive numbers', () => {
    let array = [3, 6, 8, -5, -10, 4, 10, 15, 34, -50, -25]

    bubbleSort(array)

    assert.deepEqual(array, array.sort((a, b) => {
      return a - b;
    }))
  })
})
