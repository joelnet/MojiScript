import log from 'joelscript/console/log'
import ifElse from 'joelscript/core/ifElse'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const dependencies = {
  log
}
const state = 7

// isEven :: Number -> Boolean
const isEven = x => x % 2 == 0

// isTrue :: Boolean -> Boolean
const isTrue = x => x === true

// yesOrNo :: Boolean -> String
const yesOrNo = ifElse (isTrue) ('YES') ('NO')

// main :: Number -> String
const main = ({ log }) => pipe ([
  isEven,
  yesOrNo,
  log
])

run({ dependencies, state, main }) //=> 'NO'
