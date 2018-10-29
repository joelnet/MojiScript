const pathOr = fallback => path => o => {
  if (!path.length) return fallback

  /* eslint-disable no-restricted-syntax */
  for (const key of path) {
    if (!o || !Object.prototype.hasOwnProperty.call(o, key)) {
      return fallback
    }
    // eslint-disable-next-line no-param-reassign
    o = o[key]
  }
  return o
}

module.exports = pathOr
