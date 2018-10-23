import run from 'mojiscript/core/run'
import main from './main'

const state = 'app'

const dependencies = {
  document: global.document
}

run ({ dependencies, state, main })
