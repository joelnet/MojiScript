import logF from 'mojiscript/console/logF'
import run from 'mojiscript/core/run'
import express from './interop/express'
import main from './main'

const dependencies = {
  express: express(),
  logF,
}

const state = {
  port: 3000,
}

run({ dependencies, state, main })
