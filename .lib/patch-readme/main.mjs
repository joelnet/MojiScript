import S from 'sanctuary'
import pipe from '../../core/pipe'
import replace from '../../string/replace'
import fork from '../../threading/fork'

const rxLink = /\[([^\]]*)]\(([^#][^)]*)\)/gi
const rxExternalLink = /:\/\//

const getInternalLinks = pipe ([
  S.matchAll (rxLink),
  S.map (({ groups }) => S.justs (groups)),
  S.filter (([text, link]) => !S.test (rxExternalLink) (link)),
])

const replaceLink = baseUrl => document => ([text, link]) =>
  replace (`[${text}](${link})`) (`[${text}](${baseUrl}/${link})`) (document)

const replaceAllLinks = baseUrl => ([readme, links]) =>
  S.reduce (replaceLink (baseUrl)) (readme) (links)

const main = ({ log, readFile, baseUrl }) => pipe ([
  readFile,
  fork ([ getInternalLinks ]),
  replaceAllLinks (baseUrl),
  log
])

export default main
