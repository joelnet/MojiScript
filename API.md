# [MojiScript API](https://github.com/joelnet/MojiScript#readme)

> MojiScript is an Async First, opinionated, and functional language designed to have 100% compatibility with JavaScript engines.

## core

### into :: String -> Function -> Any

Executes `func(value)` and injects the return value into the `prop` of `value`.

```javascript
import log from 'mojiscript/console/log'
import into from 'mojiscript/core/into'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import sleep from 'mojiscript/threading/sleep'

const isEven = num => num % 2 === 0
const isOdd = pipe ([
  sleep (1000),
  isEven,
  value => !value
])

const state = {
  value: 5
}

const main = pipe ([
  into ('isEven') (isEven),
  into ('isOdd') (isOdd),
  log
])

run ({ state, main })
// => { value: 5, isEven: false, isOdd: true }
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| prop | `String` | Property to set in `value`. |
| func | `Function(a -> b)`  | A `Function` that takes `value` and returns the computed result |
| value | `Object` | `Object` passed to `func` and `prop` is set into. |

##### Returns

Returns the input `Object` with the addition of `prop` attached set to the return value of `func(value)`.

### pipe :: [Function] -> Any -> Any

Pipe is an asynchronous function composer.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import sleep from 'mojiscript/threading/sleep'
import run from 'mojiscript/core/run'

const main = pipe ([
  sleep (1000),
  () => log ('done')
])

run ({ main })
//=> 'done'
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| funcs | `[Function(a -> b)]`  | A `Function` that takes `value` and returns the computed result |
| value | `Object` | `Object` passed to `func` and `prop` is set into. |

##### Returns

Returns the result of the last function in the `pipe`.

### pipeR :: [Function] -> Any -> Any

documentation needed.

### run (options)

Main entrypoint into your application. Runs your `main` pipe.

**Example 1**

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const main = pipe ([
  () => log ('done')
])

run ({ main })
//=> 'done'
```

**Example 2**

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const state = 'Hello World'

const main = pipe ([
  log
])

run ({ state, main })
//=> 'Hello World'
```

**Example 3**

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const dependencies = {
  log
}

const state = 'Hello World'

const main = ({ log }) => pipe ([
  log
])

run ({ dependencies, state, main })
//=> 'Hello World'
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| options | `Object`  | run options. |
| options.dependencies | `Object`  | Collection of dependencies. |
| options.state | `Any`  | Parameter to send to `pipe`. |
| options.main | `Function`  | Main `pipe` to run. |

##### Returns

Returns a `Promise` (need more details).

## function

### curry :: Number -> Function -> Function

Returns a curried equivalent of the provided function, with the specified arity. This function is provided for JavaScript interop and should rarely be needed inside of MojiScript files.

```javascript
import fs from 'fs'

const readFileSync = curry (2) (fs.readFileSync)

const data = readFileSync ('file.txt') ('utf8')
```

### tap :: Function -> Value -> Value

Runs the given function with the supplied object, then returns the object. `tap` is typically used when performing side-effects.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import tap from 'mojiscript/function/tap'
import axios from 'mojiscript/net/axios'

const getUser = () => ({
  name: "paul rudd",
  movies: ["I Love You Man", "Role Models"]
})

const main = pipe ([
  getUser,
  
  // the axios response is ignored and the user is returned.
  tap (user => axios.post ('https://reqres.in/api/users') (user) (null)),

  log
])

run ({ main })
//=> { name: "paul rudd", movies: ["I Love You Man", "Role Models"] }
```

## list

### filter :: Function -> Iterable -> Array

documentation needed.

### map :: Function -> Iterable -> Array

documentation needed.

### range :: Number -> Number -> Iterable

documentation needed.

### reduce :: Function -> Any -> Iterable

documentation needed.

## logic

### allPass :: [Function] -> Any -> Boolean

documentation needed.

### anyPass :: [Function] -> Any -> Boolean

documentation needed.

### cond :: Array -> Any -> Any

documentation needed.

### ifElse :: Function -> Function -> Function -> Any -> Any

documentation needed.

### ifError :: Function -> Function -> Function -> Any -> Any

documentation needed.

### unless :: Function -> Function -> Any -> Any

documentation needed.

### when :: Function -> Function -> Any -> Any

documentation needed.

## string

### append :: String -> String -> String

documentation needed.

### prepend :: String -> String -> String

documentation needed.

### replace :: String -> String -> String -> String

documentation needed.

### template :: ? -> Function

documentation needed.

## threading

### sleep :: Number -> Any -> Any

documentation needed.

## types

### is :: Any -> Any -> Boolean

documentation needed.
