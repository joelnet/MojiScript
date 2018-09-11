import pipe from 'joelscript/core/pipe'
import S from 'sanctuary'
import { peopleSearch } from './api'

// getSearchFromState :: State -> SearchString
const getSearchFromState = ({ search }) => search

// prettyPrintSearching :: SearchString -> String
const prettyPrintSearching = search => `Searching for: "${search}"`

// prettyResultCount :: SearchResults -> String
const prettyResultCount = ({ length }) => `${length} Results:`

// prettyFormatPerson :: Person -> String
const prettyFormatPerson = ({ name, gender }) => `- ${name} (${gender})`

const main = ({ axios, logF }) => pipe ([
  getSearchFromState,
  logF (prettyPrintSearching),
  peopleSearch (axios),
  S.map (prettyFormatPerson),
  logF (prettyResultCount),
  logF (S.joinWith ('\n'))
])

export default main
