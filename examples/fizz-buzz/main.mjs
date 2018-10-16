import cond from 'mojiscript/logic/cond'
import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import range from 'mojiscript/list/range'
import allPass from 'mojiscript/logic/allPass'

const isFizz = num => num % 3 === 0
const isBuzz = num => num % 5 === 0
const isFizzBuzz = allPass([ isFizz, isBuzz ])

const fizziness = cond([
  [ isFizzBuzz, 'FizzBuzz' ],
  [ isFizz, 'Fizz' ],
  [ isBuzz, 'Buzz' ],
  [ () => true, x => x ],
])

const logFizziness = log => pipe([
  fizziness,
  log,
])

const main = ({ log }) => pipe([
  ({ start, end }) => range(start)(end + 1),
  map(logFizziness(log)),
])

export default main
