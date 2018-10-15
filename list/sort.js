
const sort = func => iterable => {
  return [...iterable].sort((a, b) => func (a) (b))
}

module.exports = sort