import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import axios from 'mojiscript/net/axios'
import { askQuestion } from './interop/readline'
import main from './main'

const dependencies = {
  askQuestion,
  axios,
  log,
}

run({ dependencies, main })
