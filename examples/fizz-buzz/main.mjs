import after from 'mojiscript/core/after'
import cond from 'mojiscript/core/cond'
import pipe from 'mojiscript/core/pipe'
import pipeR from 'mojiscript/core/pipeR'
import when from 'mojiscript/core/when'
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

const main = ({ last, log }) => pipeR (next => [
  when (n => n <= last)
    (after (fizzBuzz (log)) (x => next (x + 1)))
])

export default main
