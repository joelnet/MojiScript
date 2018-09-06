import pipe from 'joelscript/core/pipe'
import S from 'sanctuary'
import { isOdd, double, add } from './lib/math'

// main :: Dependencies -> [Number] -> Number
const main = ({ log }) =>  pipe ([
  S.filter (isOdd),  // [1, 2, 3] => [1, 3]
  S.map (double),    // [1, 3]    => [2, 6]
  S.reduce (add) (0), // [2, 6]    => 8,
  log
])

export default main
