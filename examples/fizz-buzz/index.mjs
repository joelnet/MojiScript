import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import main from './main'

const dependencies = {
  last: 100,
  log
}
const state = 1

run ({ dependencies, state, main })
