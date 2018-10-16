import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import cond from 'mojiscript/logic/cond'
import $ from 'mojiscript/string/template'

const dependencies = {
  log,
}
const state = 100

// getTempInfo :: Number -> String
const getTempInfo = cond([
  [ 0, 'water freezes at 0°C' ],
  [ 100, 'water boils at 100°C' ],
  [ () => true, $`nothing special happens at ${0}°C` ],
])

const main = ({ log }) => pipe([
  getTempInfo,
  log,
])

run({ dependencies, state, main })
