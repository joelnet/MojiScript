import pipe from 'joelscript/core/pipe'
import S from 'sanctuary'
import { peopleSearch } from './api'

// getSearchFromOptions :: Options -> SearchString
const getSearchFromOptions = ({ search }) => search

// prettyPrintSearching :: SearchString -> String
const prettyPrintSearching = search => `Searching for: "${search}"`

// prettyResultCount :: SearchResults -> String
const prettyResultCount = ({ length }) => `${length} Results:`

// prettyFormatPerson :: Person -> String
const prettyFormatPerson = ({ name, gender }) => `- ${name} (${gender})`

const main = ({ axios, log2 }) => pipe ([
  getSearchFromOptions,
  log2 (prettyPrintSearching),
  peopleSearch (axios),
  S.map (prettyFormatPerson),
  log2 (prettyResultCount),
  log2 (S.joinWith ('\n'))
])

export default main
