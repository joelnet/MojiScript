const after = funcA => funcB => x =>
  Promise.resolve(funcA(x)).then(() => funcB(x))

module.exports = after
