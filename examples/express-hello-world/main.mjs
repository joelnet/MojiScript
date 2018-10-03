import pipe from 'mojiscript/core/pipe'
import tap from 'mojiscript/function/tap'
import $ from 'mojiscript/string/template'

const defaultRoute = () => res => res.send ('Hello World')
const startExpress = express => ({ port }) => express.listen (port)
const setupRoutes = express => pipe ([
  () => express.get ('/') (defaultRoute)
])

const main = ({ express, logF }) => pipe ([
  tap (setupRoutes (express)),
  tap (startExpress (express)),
  logF ($`Listening on port ${'port'}.`)
])

export default main
