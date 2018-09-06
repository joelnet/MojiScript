import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import S from 'sanctuary'

// isOdd :: Number -> Boolean
const isOdd = x => x % 2 !== 0

// double :: Number -> Number
const double = x => x * 2

// add :: Number -> Number -> Number
const add = x => y => x + y

// main :: Dependencies -> [Number] -> Number
const main = ({ log }) =>  pipe([
  S.filter(isOdd),  // [1, 2, 3] => [1, 3]
  S.map(double),    // [1, 3]    => [2, 6]
  S.reduce(add)(0), // [2, 6]    => 8,
  log
])

export default main
