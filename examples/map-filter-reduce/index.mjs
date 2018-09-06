import log from 'joelscript/console/log'
import run from 'joelscript/core/run'
import main from './main'

const dependencies = {
  log
}
const options = [1, 2, 3]

run({ main, dependencies, options }) // => 8
