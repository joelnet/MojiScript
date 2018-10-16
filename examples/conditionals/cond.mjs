import logF from 'mojiscript/console/logF'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import cond from 'mojiscript/logic/cond'

const dependencies = {
  logF,
}
const state = new Date().getDay()

const dayName = cond([
  [ 0, 'Sunday' ],
  [ 1, 'Monday' ],
  [ 2, 'Tuesday' ],
  [ 3, 'Wednesday' ],
  [ 4, 'Thursday' ],
  [ 5, 'Friday' ],
  [ 6, 'Saturday' ],
])

const main = ({ logF }) => pipe([
  dayName,
  logF(day => `Today is ${day}.`),
])

run({ dependencies, state, main })
