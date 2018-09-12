import logF from 'mojiscript/console/logF'
import run from 'mojiscript/core/run'
import axios from 'mojiscript/net/axios'
import main from './main'

const dependencies = {
  axios,
  logF
}

const state = {
  search: 'Skywalker'
}

run ({ dependencies, state, main })
