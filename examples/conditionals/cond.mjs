import log2 from 'joelscript/console/log2'
import cond from 'joelscript/core/cond'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const dependencies = {
  log2
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

const main = ({ log2 }) => pipe ([
  dayName,
  log2(day => `Today is ${day}.`)
])

run({ dependencies, state, main })
