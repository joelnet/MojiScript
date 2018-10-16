import pipe from '../../core/pipe'
import { getInternalLinks, prependAllLinks } from './markdown'
import W from '../../combinators/W'

const prependLinksInReadme = baseUrl => W(readme => pipe([
  getInternalLinks,
  prependAllLinks(baseUrl)(readme),
]))

const main = ({ log, readFile, baseUrl }) => pipe([
  readFile,
  prependLinksInReadme(baseUrl),
  log,
])

export default main
