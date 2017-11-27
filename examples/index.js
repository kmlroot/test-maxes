'use strict'

const chalk = require('chalk')
const countLowerOrEqual = require('../')

const maxes = [1, 3, 6, 9, 35]
const numbers = [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3]

console.log('\n')
console.log(chalk.blue('[First example]'))
console.log(chalk.green('Maxes:', maxes))
console.log(chalk.green('Numbers:', numbers))

console.log(chalk.red('Output:'), countLowerOrEqual(
  [1, 3, 6, 9, 35],
  [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3]
))

console.log('\n')
console.log(chalk.blue('[Second example]'))
console.time('Time 1')

console.log(chalk.green('Maxes:', maxes))
console.log(chalk.green('Numbers:', numbers))

countLowerOrEqual(
  [1, 3, 6, 9, 35],
  [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3]
)

console.timeEnd('Time 1')

console.log('\n')
console.log(chalk.blue('[Third example]'))

let n = []
for (let i = 0; i < 10000; i++) {
  n.push(parseInt(Math.random() * 1000))
}

let m = []
for (let i = 0; i < 1000; i++) {
  m.push(parseInt(Math.random() * 1000))
}

console.log(chalk.green('Maxes length:', m.length))
console.log(chalk.green('Numbers length:', n.length))

console.time('Time 2')
countLowerOrEqual(m, n)
console.timeEnd('Time 2')

console.log('\n')
console.log(chalk.blue('[Fourth example]'))

n = []
for (let i = 0; i < 100000; i++) {
  n.push(parseInt(Math.random() * 1000))
}

m = []
for (let i = 0; i < 10000; i++) {
  m.push(parseInt(Math.random() * 1000))
}

console.log(chalk.green('Maxes length:', m.length))
console.log(chalk.green('Numbers length:', n.length))

console.time('Time 3')
countLowerOrEqual(m, n)
console.timeEnd('Time 3')
