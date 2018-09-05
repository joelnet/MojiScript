import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const options = 'Hello World'

const main = pipe([
  log
])

run({ main, options })
