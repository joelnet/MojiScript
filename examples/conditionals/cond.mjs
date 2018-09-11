import logF from 'joelscript/console/logF'
import cond from 'joelscript/core/cond'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const dependencies = {
  logF
}
const state = new Date().getDay()

const dayName = cond ([
  [ 0, 'Sunday' ],
  [ 1, 'Monday' ],
  [ 2, 'Tuesday' ],
  [ 3, 'Wednesday' ],
  [ 4, 'Thursday' ],
  [ 5, 'Friday' ],
  [ 6, 'Saturday' ]
])

const main = ({ logF }) => pipe ([
  dayName,
  logF(day => `Today is ${day}.`)
])

run({ dependencies, state, main })
