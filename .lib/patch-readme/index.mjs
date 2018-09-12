import log from '../../console/log'
import run from '../../core/run'
import { readFileUtf8 } from './interop/fs'
import main from './main'

const dependencies = {
  baseUrl: 'https://github.com/joelnet/MojiScript',
  readFile: readFileUtf8,
  log
}
const state = `${process.cwd()}/README.md`

run({ dependencies, state, main })
