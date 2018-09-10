import log from 'joelscript/console/log'
import cond from 'joelscript/core/cond'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const dependencies = {
  log
}
const state = 100

// getTempInfo :: Number -> String
const getTempInfo = cond ([
  [ 0, 'water freezes at 0°C' ],
  [ 100, 'water boils at 100°C' ],
  [ true, temp => `nothing special happens at ${temp}°C` ]
])

const main = ({ log }) => pipe ([
  getTempInfo,
  log
])

run({ dependencies, state, main })
