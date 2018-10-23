import pipe from 'mojiscript/core/pipe'
import { setInnerText, getElementById } from './interop/dom.js'

const main = ({ document }) => pipe ([
  getElementById (document),
  setInnerText ('Hello World!')
])

export default main
