const isFunction = value => typeof value === 'function'
const isArray = value => value != null && (value.constructor === Array)
const isNumber = value => value != null && (value.constructor === Number)
const isString = value => value != null && (value.constructor === String)
const isObject = value => value != null && (value.constructor === Object)

const simplifyValue = value =>
  value === null ? 'null'
  : isNumber(value) || isString(value) ? JSON.stringify(value)
  : isArray(value) && value.length < 10 ? `[${value.join(',')}]`
  : isArray(value) ? `Array(${value.length})`
  : isObject(value) && isFunction(value.inspect) ? value.inspect()
  : isFunction(value) ? value.name || 'function'
  : typeof value

const parseSignature = signature => {
  const split = /(\w+)\s*::\s*(.*)/.exec(signature)
  const args = split[2].split('->').map(x => x.trim()) // ?
  return {
    method: split[1],
    args: args.slice(0, args.length - 1),
    returnType: args[args.length - 1]
  }
}

/*
{
  method: "add",
  types: [],
  target: null,
  args: []
  returnType: null
}
*/

const internalSignature = ({ method, args, returnType }) => func => {
  const name = method || func.name || 'anonymous'

  // temp object is used to create a named function.
  const temp = {
    [name]: value => {
      Object.defineProperty(func, 'name', { value: `${name} (${simplifyValue(value)})` })
      if (args.length <= 1) {
        return func(value)
      }
      return internalSignature({ method: `${name} (${simplifyValue(value)})`, args: args.slice(1), returnType })(func(value))
    }
  }
  temp[name].inspect = () => `${name} :: ${args.join(' -> ')} -> ${returnType}`

  return temp[name]
}

const signature = signature =>
  isString(signature)
    ? internalSignature(parseSignature(signature))
    : internalSignature(signature)

module.exports = signature
