import W from 'mojiscript/combinators/W'
import pipe from 'mojiscript/core/pipe'
import join from 'mojiscript/list/join'
import map from 'mojiscript/list/map'
import ifElse from 'mojiscript/logic/ifElse'
import prepend from 'mojiscript/string/prepend'
import $ from 'mojiscript/string/template'
import isEmpty from 'ramda/src/isEmpty'
import { peopleSearch } from './api'

const showNoSearch = $`No search was performed.`
const showNoResults = search => () => `0 Results for "${search}".`
const showResults = W (({ length }) => pipe ([
  map ($`- ${'name'} (${'gender'})`),
  join ('\n'),
  prepend (`${length} results:\n`)
]))

const ifEmpty = ifElse (isEmpty)

const searchForPerson = axios => W (search => pipe ([
  peopleSearch (axios),
  ifEmpty (showNoResults (search)) (showResults)
]))

const main = ({ axios, askQuestion, log }) => pipe ([
  askQuestion ('Search for Star Wars Character: '),
  ifEmpty (showNoSearch) (searchForPerson (axios)),
  log
])

export default main
