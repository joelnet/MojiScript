
const sort = func => iterable => [ ...iterable ].sort((a, b) => func(a)(b))

module.exports = sort
