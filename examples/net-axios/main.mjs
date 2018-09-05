import pipe from 'joelscript/core/pipe'
import join from 'joelscript/list/join'
import map from 'joelscript/list/map'
import { peopleSearch } from './api'

// getSearchFromOptions :: Options -> SearchString
const getSearchFromOptions = ({ search }) => search

// prettyPrintSearching :: SearchString -> String
const prettyPrintSearching = search =>
  `Searching for: "${search}"`

// prettyResultCount :: SearchResults -> String
const prettyResultCount = ({ length }) =>
  `${length} Results:`

// prettyFormatPerson :: Person -> String
const prettyFormatPerson = ({ name, gender }) =>
  `- ${name} (${gender})`

const main = ({ axios, log2 }) => pipe([
  getSearchFromOptions,
  log2(prettyPrintSearching),
  peopleSearch(axios),
  map(prettyFormatPerson),
  log2(prettyResultCount),
  log2(join('\n'))
])

export default main
