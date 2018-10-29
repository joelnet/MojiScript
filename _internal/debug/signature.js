const is = require('../../type/is')

const isArray = is(Array)
const isNumber = is(Number)
const isString = is(String)
const isFunction = is(Function)
const isObject = is(Object)

const simplifyValue = value =>
  isNumber(value) || isString(value) ? JSON.stringify(value)
  : isArray(value) && value.length < 10 ? `[${value.join(',')}]`
  : isArray(value) ? `Array(${value.length})`
  : isObject(value) && isFunction(value.inspect) ? value.inspect()
  : isFunction(value) ? value.name || 'function'
  : typeof value

/*
{
  method: "add",
  types: [],
  target: null,
  args: []
  returnType: null
}
*/

const signature = ({ method, args, returnType }) => func => {
  const name = method || func.name || 'anonymous'

  // temp object is used to create a named function.
  const temp = {
    [name]: value => {
      Object.defineProperty(func, 'name', { value: `${name} (${simplifyValue(value)})` })
      if (args.length <= 1) {
        return func(value)
      }
      return signature({ method: `${name} (${simplifyValue(value)})`, args: args.slice(1), returnType })(func(value))
    }
  }
  temp[name].inspect = () => `${name} :: ${args.join(' -> ')} -> ${returnType}`

  return temp[name]
}

module.exports = signature
