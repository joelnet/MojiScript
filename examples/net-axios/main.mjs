import pipe from 'joelscript/core/pipe'
import map from 'joelscript/list/map'
import $ from 'joelscript/string/template'
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
