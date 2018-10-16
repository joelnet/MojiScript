import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import main from './main'

const dependencies = {
  log,
}
const state = {
  start: 1,
  end: 100,
}

run({ dependencies, state, main })
