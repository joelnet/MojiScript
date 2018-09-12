import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import $ from 'mojiscript/string/template'
import join from 'ramda/src/join'
import { peopleSearch } from './api'

// getSearchFromState :: State -> SearchString
const getSearchFromState = ({ search }) => search

const main = ({ axios, logF }) => pipe ([
  getSearchFromState,
  logF ($`Searching for: "${0}"`),
  peopleSearch (axios),
  map ($`- ${'name'} (${'gender'})`),
  logF ($`${'length'} Results:`),
  logF (join ('\n'))
])

export default main
