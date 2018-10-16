import S from 'sanctuary' // eslint-disable-line import/no-extraneous-dependencies
import pipe from '../../core/pipe'
import replace from '../../string/replace'

const rxLink = /\[([^\]]*)]\(([^#][^)]*)\)/gi
const rxExternalLink = /:\/\//
const isInternalLink = ([ , link ]) => !S.test(rxExternalLink)(link)

export const getAllLinks = pipe([
  S.matchAll(rxLink),
  S.map(({ groups }) => S.justs(groups))
])

export const getInternalLinks = pipe([
  getAllLinks,
  S.filter(isInternalLink)
])

export const prependLink = baseUrl => document => ([ text, link ]) => replace(`[${text}](${link})`)(`[${text}](${baseUrl}/${link})`)(document)

export const prependAllLinks = baseUrl => S.reduce(prependLink(baseUrl))
