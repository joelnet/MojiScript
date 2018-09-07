import log from 'joelscript/console/log'
import run from 'joelscript/core/run'
import main from './main'

const dependencies = {
  log
}
const state = [ 1, 2, 3 ]

run ({ dependencies, state, main }) // => 8
