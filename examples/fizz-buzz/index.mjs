import log from 'joelscript/console/log'
import run from 'joelscript/core/run'
import main from './main'

const dependencies = {
  last: 100,
  log
}
const state = 1

run ({ dependencies, state, main })
