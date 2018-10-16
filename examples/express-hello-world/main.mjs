import pipe from 'mojiscript/core/pipe'
import tap from 'mojiscript/function/tap'
import $ from 'mojiscript/string/template'

// selectors
const getPort = ({ port }) => port

// routes
const defaultRoute = () => ({ send }) => send('Hello World')

// express
const setupRoutes = ({ get }) => pipe([
  () => get('/')(defaultRoute),
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
