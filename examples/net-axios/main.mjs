import pipe from 'joelscript/core/pipe'
import template from 'joelscript/string/template'
import S from 'sanctuary'
import { peopleSearch } from './api'

// getSearchFromState :: State -> SearchString
const getSearchFromState = ({ search }) => search

const main = ({ axios, logF }) => pipe ([
  getSearchFromState,
  logF (template `Searching for: "${0}"`),
  peopleSearch (axios),
  S.map (template `- ${'name'} (${'gender'})`),
  logF (template `${'length'} Results:`),
  logF (S.joinWith ('\n'))
])

export default main
