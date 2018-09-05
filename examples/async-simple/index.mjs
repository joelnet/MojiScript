import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import sleep from 'joelscript/threading/sleep'

const options = 4

// increase :: Number -> Number
const increase = x => x + 1

// double :: Number -> Number
const double = x => x * 2

const main = pipe([
  log,
  sleep(1000),
  increase,
  double,
  log
])

run({ main, options }) //=> 10
