import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import main from './main'

const dependencies = {
  log,
}
const state = [ 1, 2, 3 ]

run({ dependencies, state, main }) // => 8
