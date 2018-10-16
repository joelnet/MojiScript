import pipe from 'mojiscript/core/pipe'
import tap from 'mojiscript/function/tap'
import $ from 'mojiscript/string/template'

// selectors
const getPort = ({ port }) => port

// express
const setupRoutes = express => pipe([
  () => express.use('/')(express.static('public')),
  () => express.use('/')(express.directory('public')),
])
const startExpress = ({ listen }) => pipe([
  getPort,
  listen,
])

const main = ({ express, logF }) => pipe([
  tap(setupRoutes(express)),
  tap(startExpress(express)),
  logF($`Listening on port ${'port'}.`),
])

export default main
