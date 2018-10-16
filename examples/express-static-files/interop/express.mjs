/**
 * Interop file converts the JavaScript express library into a MojiScript compatible library.
 */
import express from 'express'
import serveIndex from 'serve-index'

export default () => {
  // wrap app in our own function so we can return MojiScript compatible `get` and `listen`.
  const app = express ()

  return {
    // directory to call serveIndex
    directory: path => serveIndex (path),

    // pass through express.static
    static: express.static,

    // curry use
    use: route => path => app.use (route, path),

    // convert callback into a Promise.
    listen: port => new Promise (resolve => app.listen (port, data => resolve (data)))
  }
}
