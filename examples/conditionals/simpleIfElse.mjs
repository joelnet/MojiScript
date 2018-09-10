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

// yesOrNo :: Boolean -> String
const yesIfEven = ifElse (isEven) (num => `Yes, ${num} is even.`) (num => `NO, ${num} is not even.`)

// main :: Number -> String
const main = ({ log }) => pipe ([
  yesIfEven,
  log
])

run({ dependencies, state, main }) //=> 'NO'
