'use strict'

const chalk = require('chalk')

const countLowerOrEqual = function (maxes, numbers) {
  if (maxes.length === 0 || numbers.length === 0) {
    return []
  }

  let count = 0
  const result = []

  numbers.sort((x, y) => x - y)

  for (let i = 0, len = maxes.length; i < len; i++) {
    const current = maxes[i]

    for (let j = 0, len = numbers.length; j <= len; j++) {
      if (numbers[j] <= current) {
        count += 1
      } else {
        break
      }
    }

    result.push(count)
    count = 0
  }

  return result.sort((x, y) => x - y)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

if (!module.parent) {
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)
}

module.exports = countLowerOrEqual
