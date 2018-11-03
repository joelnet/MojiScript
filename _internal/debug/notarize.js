const isFunction = value => typeof value === 'function'
const isArray = value => value != null && (value.constructor === Array)
const isNumber = value => value != null && (value.constructor === Number)
const isString = value => value != null && (value.constructor === String)
const isObject = value => value != null && (value.constructor === Object)

const trim = string => string.trim()

const friendlyValue = value =>
  value === null ? 'null'
  : isNumber(value) || isString(value) ? JSON.stringify(value)
  : isArray(value) && value.length < 10 ? `[${value.join(',')}]`
  : isArray(value) ? `Array(${value.length})`
  : isObject(value) && isFunction(value.inspect) ? value.inspect()
  : isFunction(value) ? value.name || 'function'
  : typeof value

const parseRightSignature = (signature, values = []) => {
  if (!signature) {
    return values
  }
  const next = /^\([^)]+\)|\w+/.exec(signature.trim())[0]
  const nextArrow = signature.indexOf('->', next.length)
  const trimAt = nextArrow === -1 ? next.length : nextArrow + 2
  const nextSignature = signature.substr(trimAt).trim()
  return parseRightSignature(nextSignature, [ ...values, next ])
}

const parseSignature = signature => {
  if ((signature || '').indexOf('::') === -1) {
    return { name: undefined }
  }
  const split = signature.split('::').map(trim)
  const args = parseRightSignature(split[1])
  return {
    method: split[0],
    args: args.slice(0, args.length - 1),
    returns: args[args.length - 1]
  }
}

const internalSignature = ({ method, args, returns }) => func => {
  const name = method || func.name || 'anonymous'

  // temp object is used to create a named function.
  const temp = {
    [name]: value => {
      Object.defineProperty(func, 'name', { value: `${name} (${friendlyValue(value)})` })
      if (args.length <= 1) {
        return func(value)
      }
      return internalSignature({ method: `${name} (${friendlyValue(value)})`, args: args.slice(1), returns })(func(value))
    }
  }
  temp[name].inspect = args.length === 0
    ? () => `${name} :: ${returns}`
    : () => `${name} :: ${args.join(' -> ')} -> ${returns}`

  return temp[name]
}

const sign = signature => func => {
  const parsed = parseSignature(signature)
  return internalSignature(parsed)(func)
}

module.exports.parseSignature = parseSignature
module.exports.sign = sign
