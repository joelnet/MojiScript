import pipe from '../../core/pipe'
import fork from '../../threading/fork'
import { getInternalLinks, prependAllLinks } from './markdown'

const main = ({ log, readFile, baseUrl }) => pipe ([
  readFile,
  fork ([ getInternalLinks ]),
  ([ readme, links ]) => prependAllLinks (baseUrl) (readme) (links),
  log
])

export default main
