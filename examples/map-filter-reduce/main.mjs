import pipe from 'mojiscript/core/pipe'
import filter from 'mojiscript/list/filter'
import map from 'mojiscript/list/map'
import reduce from 'mojiscript/list/reduce'
import { add, double, isOdd } from './lib/math'

// main :: Dependencies -> [Number] -> Number
const main = ({ log }) => pipe ([
  filter (isOdd), // [1, 2, 3] => [1, 3]
  map (double), // [1, 3]    => [2, 6]
  reduce (add) (0), // [2, 6]    => 8,
  log
])

export default main
