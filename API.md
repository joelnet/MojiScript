# [MojiScript API](https://github.com/joelnet/MojiScript#readme)

> MojiScript is an Async First, opinionated, and functional language designed to have 100% compatibility with JavaScript engines.

## core

### core/into :: String -> Function -> Any

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

### core/pipe :: [Function] -> Any -> Any

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

### core/pipeR :: [Function] -> Any -> Any

documentation needed.

### core/run :: Any -> Any

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

Returns a `Promise` containing the results of `main`.

## function

### function/curry :: Number -> Function -> Function

Returns a curried equivalent of the provided function, with the specified arity. This function is provided for JavaScript interop and should rarely be needed inside of MojiScript files.

```javascript
import fs from 'fs'

const readFileSync = curry (2) (fs.readFileSync)

const data = readFileSync ('file.txt') ('utf8')
```

### function/tap :: Function -> Value -> Value

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

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | `Function`  | Function to execute |
| value | `Object`  | Input object for function and return value of the `tap`. |

##### Parameters

Returns the object originally given as an input.

## list

### list/filter :: Function -> Iterable -> Array

Takes a predicate and an `Iterable` and returns an `Array` of the same type containing the members of the given filterable which satisfy the given predicate.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import filter from 'mojiscript/list/filter'

const isEven = num => num % 2 === 0

const main = pipe ([
  [ 1, 2, 3, 4, 5 ],
  filter (isEven),
  log
])

run ({ main })
//=> [ 2, 4 ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| predicate | `Function`  | Function takes and input and returns a `Boolean` |
| iterable | `Iterable`  | `Iterable` to apply the predicate to. |

##### Parameters

Returns an `Array` filtered by the `predicate`.

### list/map :: Function -> Iterable -> Array

Takes a function and an `Iterable` and returns an `Array` with the function applied to each value in the `Iterable`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import map from 'mojiscript/list/map'

const double = num => num * 2

const main = pipe ([
  [ 1, 2, 3 ],
  map (double),
  log
])

run ({ main })
//=> [ 2, 4, 6 ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | `Function`  | Function to apply to each item in the `Iterable`. |
| iterable | `Iterable`  | `Iterable` to apply the function to. |

##### Parameters

Returns an `Array` with the function applied to each value in the `Iterable`.

### list/range :: Number -> Number -> Iterable

Creates an `Iterable` from `start` up to but not including the `end`.

### list/reduce :: Function -> Any -> Iterable

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.


## logic

### logic/allPass :: [Function] -> Any -> Boolean

Takes a list of `predicates` and returns `true` if all `predicates` are `true`.

### logic/anyPass :: [Function] -> Any -> Boolean

Takes a list of `predicates` and returns `true` if one `predicates` is `true`.

### logic/cond :: Array -> Any -> Any

Encapsulates `if/else/elseif` logic.

### logic/ifElse :: Function -> Function -> Function -> Any -> Any

Encapsulates `if/else` logic.

### logic/ifError :: Function -> Function -> Function -> Any -> Any

Error handler executes `onError` if an error occurs, otherwise `onSuccess` is executed.

### logic/unless :: Function -> Function -> Any -> Any

Executes the function unless the `predicate` is `true`.

### logic/when :: Function -> Function -> Any -> Any

Executes the function when the `predicate` is `true`.

## string

### string/append :: String -> String -> String

Concatinates two `String`s.

### string/prepend :: String -> String -> String

Prepends a `String` to another `String`.

### string/replace :: String -> String -> String -> String

Replaces a `String` with a `String` in another `String`.

### strinbg/template :: Template -> Function -> String

Creates a template function that returns a `String`.

## threading

### threading/sleep :: Number -> Any -> Any

`sleep` the application for a given number of `milliseconds`.

## type

### type/is :: Any -> Any -> Boolean

Checks the type of an `Object`.
