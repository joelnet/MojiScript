import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import wait from 'mojiscript/threading/sleep'

const state = 1

const main = pipe ([
  log,
  wait (1000),
  x => main (x + 1)
])

run ({ state, main })