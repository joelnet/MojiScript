import logF from 'joelscript/console/logF'
import run from 'joelscript/core/run'
import axios from 'joelscript/net/axios'
import main from './main'

const dependencies = {
  axios,
  logF
}

const state = {
  search: 'Skywalker'
}

run ({ dependencies, state, main })
