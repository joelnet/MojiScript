const signature = require('../_internal/debug/signature')

// curry2 :: Function -> Any -> Any -> Any
let curry2 = func => a => b => func(a, b)

// curry3 :: Function -> Any -> Any -> Any -> Any
let curry3 = func => a => b => c => func(a, b, c)

// curry4 :: Function -> Any -> Any -> Any -> Any -> Any
let curry4 = func => a => b => c => d => func(a, b, c, d)

// curry5 :: Function -> Any -> Any -> Any -> Any -> Any -> Any
let curry5 = func => a => b => c => d => e => func(a, b, c, d, e)

// curry6 :: Function -> Any -> Any -> Any -> Any -> Any -> Any -> Any
let curry6 = func => a => b => c => d => e => f => func(a, b, c, d, e, f)

const curry = n => (
  n === 2 ? curry2
  : n === 3 ? curry3
  : n === 4 ? curry4
  : n === 5 ? curry5
  : n === 6 ? curry6
  : (() => { throw new Error(`Cannot curry a function with ${n} arguments.`) })())

module.exports = curry

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  curry2 = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any' ], returnType: 'Any' })(curry2)
  curry3 = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry3)
  curry4 = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry4)
  curry5 = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry5)
  curry6 = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry6)
}
