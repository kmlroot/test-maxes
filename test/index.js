/* global describe it */

'use strict'

const { assert, expect } = require('chai')

const countLowerOrEqual = require('../')

describe('countLowerOrEqual', function () {
  it('should return an array', () => {
    expect(countLowerOrEqual([1], [1])).to.be.a('array')
  })

  it('should return a length of 5', function () {
    expect(countLowerOrEqual([1, 3, 6, 9, 35],
      [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3])).to.have.lengthOf(5)
  })

  it('should return an array with [3, 7, 10, 13, 14]', function () {
    const expected = [3, 7, 10, 13, 14]

    const result = countLowerOrEqual([1, 3, 6, 9, 35],
      [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3])

    expect({ key: result }).to.deep.equal({ key: expected })
  })

  it('should return an array with [3, 7, 10, 13, 14]', function () {
    const expected = [3, 7, 10, 13, 14]

    const result = countLowerOrEqual([3, 35, 9, 1, 6],
      [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3])

    expect({ key: result }).to.deep.equal({ key: expected })
  })

  it('should return a new array', function () {
    let numbers = []
    for (let i = 0; i < 10000; i++) {
      numbers.push(parseInt(Math.random() * 1000))
    }

    let maxes = []
    for (let i = 0; i < 1000; i++) {
      maxes.push(parseInt(Math.random() * 1000))
    }

    const start = new Date().getTime()

    countLowerOrEqual(maxes, numbers)

    const end = new Date().getTime()

    const finalTime = Math.ceil(end - start)

    assert.isBelow(finalTime, 120)
  })

  it('this will be a valid test, because countLowerOrEqual is a function', function () {
    assert.isFunction(countLowerOrEqual, 'Well, countLowerOrEqual is a function')
  })

  it('should return 1', function () {
    const numbers = [-1]
    const maxes = [-1]

    expect(countLowerOrEqual(maxes, numbers)).to.deep.equal([1])
    expect(countLowerOrEqual(maxes, numbers)).to.lengthOf(1)
  })

  it('should return an empty array', function () {
    const result = countLowerOrEqual([], [])
    const expected = []
    expect({ key: result }).to.deep.equal({ key: expected })
  })
})
