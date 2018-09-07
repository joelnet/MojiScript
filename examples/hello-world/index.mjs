import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const state = 'Hello World'

const main = pipe ([
  log
])

run ({ state, main })
