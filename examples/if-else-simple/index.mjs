import log from 'joelscript/console/log'
import ifElse from 'joelscript/core/ifElse'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const options = 7

// isEven :: Number -> Boolean
const isEven = x => x % 2 == 0

// isTrue :: Boolean -> Boolean
const isTrue = x => x === true

// yesOrNo :: Boolean -> String
const yesOrNo = ifElse(isTrue)('YES')('NO')

// main :: Number -> String
const main = pipe(
  isEven,
  yesOrNo,
  log
)

run({ main, options }) //=> 'NO'