const fork = forks => value =>
  Promise.all (
    [ value ].concat (forks.map (f => f (value)))
  )

module.exports = fork
