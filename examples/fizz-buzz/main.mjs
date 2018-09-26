import cond from 'mojiscript/core/cond'
import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import range from 'mojiscript/list/range'
import S from 'sanctuary'

// getFizzInfo :: Number -> FizzInfo
const getFizzInfo = value => ({
  value,
  fizz: value % 3 === 0,
  buzz: value % 5 === 0
})

// isFizz :: FizzInfo -> Boolean
const isFizz = ({ fizz }) => fizz

// isBuzz :: FizzInfo -> Boolean
const isBuzz = ({ buzz }) => buzz

// fizzInfoToStatus :: FizzInfo -> String | Number
const fizzInfoToStatus = cond ([
  [ S.allPass ([ isFizz, isBuzz ]), 'FizzBuzz' ],
  [ isFizz, 'Fizz' ],
  [ isBuzz, 'Buzz' ],
  [ () => true, ({ value }) => value ]
])

// fizzBuss :: Number -> String | Number
const fizzBuzz = log => pipe ([
  getFizzInfo,
  fizzInfoToStatus,
  log
])

const main = ({ log }) => pipe ([
  ({ start, end }) => range (start) (end + 1),
  map (fizzBuzz (log))
])

export default main
