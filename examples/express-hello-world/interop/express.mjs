/**
 * Interop file converts the JavaScript express library into a MojiScript compatible library.
 */
import express from 'express'

export default () => {
  // wrap app in our own function so we can return MojiScript compatible `get` and `listen`.
  const app = express ()

  return {
    // curry `get` and `handler
    get: path => handler => app.get (path, (req, res) => handler (req) (res)),

    // convert callback into a Promise.
    listen: port => new Promise (resolve => app.listen (port, data => resolve (data)))
  }
}
