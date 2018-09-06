import log2 from 'joelscript/console/log2'
import run from 'joelscript/core/run'
import axios from 'joelscript/net/axios'
import main from './main'

const dependencies = {
  axios,
  log2
}

const options = {
  search: 'Skywalker'
}

run ({ dependencies, options, main })
