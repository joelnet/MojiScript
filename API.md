# [MojiScript API](https://github.com/joelnet/MojiScript#readme)

> MojiScript is an Async First, opinionated, and functional language designed to have 100% compatibility with JavaScript engines.

## Table of Contents

- [core](#core)
  * [into](#into)
  * [pipe](#pipe)
  * [pipeR](#piper)
  * [run](#run)
- [function](#function)
  * [curry](#curry)
  * [tap](#tap)
- [list](#list)
  * [filter](#filter)
  * [head](#head)
  * [map](#map)
  * [range](#range)
  * [reduce](#reduce)
  * [reduceWhile](#reduceWhile)
  * [sort](#sort)
  * [tail](#tail)
- [logic](#logic)
  * [allPass](#allpass)
  * [anyPass](#anypass)
  * [cond](#cond)
  * [ifElse](#ifelse)
  * [ifError](#iferror)
  * [unless](#unless)
  * [when](#when)
- [string](#string)
  * [append](#append)
  * [prepend](#prepend)
  * [replace](#replace)
  * [template](#template)
- [threading](#threading)
  * [sleep](#sleep)
- [type](#type)
  * [is](#is)

## core

### into

`into :: String -> Function -> Any`

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

### pipe

`pipe :: [Function] -> Any -> Any`

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

### pipeR

`pipeR :: [Function] -> Any -> Any`

Pipe is an asynchronous function composer for recursive functions.

```javascript
import log from 'mojiscript/console/log'
import pipeR from 'mojiscript/core/pipeR'
import run from 'mojiscript/core/run'
import wait from 'mojiscript/threading/sleep'

const state = 1

const main = pipeR (next => [
  log,
  wait (1000),
  x => next (x + 1)
])

run ({ state, main })
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| funcs | `[Function(a -> b)]`  | A `Function` that takes `value` and returns the computed result |
| value | `Object` | `Object` passed to `func` and `prop` is set into. |

##### Returns

Returns the result of the last function in the `pipeR`.

### run

`run :: Any -> Any`

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

### curry

`curry :: Number -> Function -> Function`

Returns a curried equivalent of the provided function, with the specified arity. This function is provided for JavaScript interop and should rarely be needed inside of MojiScript files.

```javascript
import fs from 'fs'

const readFileSync = curry (2) (fs.readFileSync)

const data = readFileSync ('file.txt') ('utf8')
```

### tap

`tap :: Function -> Any -> Any`

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

##### Returns

Returns the object originally given as an input.

## list

### filter

`filter :: Function -> Iterable -> Array`

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

##### Returns

Returns an `Array` filtered by the `predicate`.

### head

`head :: Iterable -> Any`

Takes an `Iterable` and returns the head of the `Iterable`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import head from 'mojiscript/list/head'

const main = pipe ([
  [ 1, 2, 3 ],
  head,
  log
])

run ({ main })
//=> 1
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| iterable | `Iterable`  | `Iterable` to get the first value from. |

##### Returns

Returns the head of `Iterable`

### map

`map :: Function -> Iterable -> Array`

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

##### Returns

Returns an `Array` with the function applied to each value in the `Iterable`.

### range

`range :: Number -> Number -> Iterable`

Creates an `Iterable` from `start` up to but not including the `end`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import map from 'mojiscript/list/map'
import range from 'mojiscript/list/range'

const main = pipe ([
  range (0) (5),
  map (log)
])

run ({ main })
//=> [ 0, 1, 2, 3, 4 ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| start | `Number`  | Start `Number` of the range. |
| end | `Number`  | End `Number` to increment up to (but not including) |

##### Returns

Returns an `Iterable` starting at `start` and counting up to (but not including) `end`.

### reduce

`reduce :: Function -> Any -> Iterable`

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import range from 'mojiscript/list/range'
import reduce from 'mojiscript/list/reduce'

const add = x => y => x + y

const main = pipe ([
  range (1) (4),    //=> [ 1, 2, 3 ]
  reduce (add) (0), //=> 6
  log
])

run ({ main })
//=> 6
```

### reduceWhile

`reduceWhile :: Predicate -> Function -> Any -> Iterable`

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call. For each iteration, check the predicate function. If the predicate is true, run the current iteration. If false, return the current accumulator.

The predicate will be

`predicate :: Any -> Any -> Boolean`

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import range from 'mojiscript/list/range'
import reduceWhile from 'mojiscript/list/reduceWhile'

const add = x => y => x + y
const predicate = acc => x => acc <= 2

const main = pipe ([
  range (1) (Infinity),    //=> [ 1, 2, 3 ]
  reduceWhile (predicate) (add) (0), //=> 3
  log
])

run ({ main })
//=> 3
```

### sort

`sort :: Function -> Iterable -> Array`

Takes a function and an `Iterable` and returns an `Array` with values sorted based on the function return value.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import sort from 'mojiscript/list/sort'

const asc = (a, b) => a < b ? -1 : 1

const main = pipe ([
  [ 1, 4, 3, 5, 2 ],
  sort (asc),
  log
])

run ({ main })
//=> [ 1, 2, 3, 4, 5 ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | `Function`  | Function to apply to each item in the `Iterable`. |
| iterable | `Iterable`  | `Iterable` to apply the function to. |

##### Returns

Returns an `Array` with the function applied to each value in the `Iterable`.

### tail

`tail :: Iterable -> Array`

Takes an `Iterable` and the tail of the `Iterable` as an `Array`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import tail from 'mojiscript/list/tail'

const main = pipe ([
  [ 1, 2, 3 ],
  tail,
  log
])

run ({ main })
//=> [2, 3]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| iterable | `Iterable`  | `Iterable` to get the tail from. |

##### Returns

Returns the tail of `Iterable`


## logic

### allPass

`allPass :: [Function] -> Any -> Boolean`

Takes an `Array` of `predicates` and returns `true` if all `predicates` are `true`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import map from 'mojiscript/list/map'
import allPass from 'mojiscript/logic/allPass'

const isFizz = num => num % 5 == 0
const isBuzz = num => num % 3 == 0
const isFizzBuzz = allPass ([ isFizz, isBuzz ])

const main = pipe ([
  [ 5, 10, 15 ],
  map (isFizzBuzz),
  log
])

run ({ main })
//=> [ false, false, true ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| predicates | `[Function]`  | An `Array` of `predicates` to apply to each item in the `Iterable`. |
| value | `Any`  | Value to test. |

##### Returns

Returns `true` if all `predicates` are `true`, otherwise `false`.

### anyPass

`anyPass :: [Function] -> Any -> Boolean`

Takes a list of `predicates` and returns `true` if one `predicates` is `true`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import map from 'mojiscript/list/map'
import anyPass from 'mojiscript/logic/anyPass'

const isFizz = num => num % 5 == 0
const isBuzz = num => num % 3 == 0
const isFizzBuzz = anyPass ([ isFizz, isBuzz ])

const main = pipe ([
  [ 5, 10, 15 ],
  map (isFizzBuzz),
  log
])

run ({ main })
//=> [ true, false, true ]
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| predicates | `[Function]`  | An `Array` of `predicates` to apply to each item in the `Iterable`. |
| value | `Any`  | Value to test. |

##### Returns

Returns `true` if any `predicate` is `true`, otherwise `false`.

### cond

`cond :: Array -> Any -> Any`

Encapsulates `if/else/elseif` logic.

**Example 1**

```javascript
import logF from 'mojiscript/console/logF'
import cond from 'mojiscript/logic/cond'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const dependencies = {
  logF
}
const state = 5

const dayName = cond ([
  [ 0, 'Sunday' ],
  [ 1, 'Monday' ],
  [ 2, 'Tuesday' ],
  [ 3, 'Wednesday' ],
  [ 4, 'Thursday' ],
  [ 5, 'Friday' ],
  [ 6, 'Saturday' ]
])

const main = ({ logF }) => pipe ([
  dayName,
  logF(day => `Today is ${day}.`)
])

run({ dependencies, state, main })
//=> 'Friday'
```

**Example 2**

```javascript
import log from 'mojiscript/console/log'
import cond from 'mojiscript/logic/cond'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import $ from 'mojiscript/string/template'

const dependencies = {
  log
}
const state = 100

// getTempInfo :: Number -> String
const getTempInfo = cond ([
  [ 0, 'water freezes at 0°C' ],
  [ 100, 'water boils at 100°C' ],
  [ () => true, $`nothing special happens at ${0}°C` ]
])

const main = ({ log }) => pipe ([
  getTempInfo,
  log
])

run({ dependencies, state, main })
//=> 'water boils at 100°C'
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| pairs | `[predicate, transformer]`  | An `Array` of pairs of `predicate`s and `transformer`s. |
| value | `Any`  | Value to test. |

##### Returns

Returns the transformed value of the matching `predicate`.

### ifElse

`ifElse :: Function -> Function -> Function -> Any -> Any`

Encapsulates `if/else` logic.

```javascript
import log from 'mojiscript/console/log'
import ifElse from 'mojiscript/logic/ifElse'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import $ from 'mojiscript/string/template'

const dependencies = {
  log
}
const state = 7

const isEven = x => x % 2 == 0
const yes = $`Yes, ${0} is even.`
const no = $`NO, ${0} is not even.`

const main = ({ log }) => pipe ([
  ifElse (isEven) (yes) (no),
  log
])

run({ dependencies, state, main })
//=> 'NO, 7 is not even.'
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| condition | `Function`  | A predicate function. |
| onTrue | `Function`  | Invoked when the predicate evaluates to a truthy value. |
| onFalse | `Function`  | Invoked when the predicate evaluates to a falsy value. |
| value | `Any`  | Value to be passed to condition and either `onTrue` or `onFalse` function. |

##### Returns

Returns the result of either `onTrue` or `onFalse` depending on the result of the `condition`.

### ifError

`ifError :: Function -> Function -> Function -> Any -> Any`

Error handler executes `onError` if an error occurs, otherwise `onSuccess` is executed.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import ifError from 'mojiscript/logic/ifError'
import $ from 'mojiscript/string/template'

const state = 1

const toUpperCase = value => value.toUpperCase ()

const main = pipe ([
  ifError (toUpperCase) ($`OOPS: ${0}`) ($`Value: ${0}`),
  log
])

run ({ state, main })
// OOPS: TypeError: value.toUppercase is not a function
```

### unless

`unless :: Function -> Function -> Any -> Any`

Executes `onFalse` when the `condition` returns a falsy value. Otherwise `value` is returned.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import unless from 'mojiscript/logic/unless'
import is from 'mojiscript/types/is'

const state = 1

const isString = is (String)
const toString = x => x.toString ()

const main = pipe ([
  unless (isString) (toString),
  log
])

run ({ state, main })
//=> '1'
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| condition | `Function`  | A predicate function. |
| onFalse | `Function`  | Invoked when the predicate evaluates to a falsy value. |
| value | `Any`  | Value to be passed to condition and `onFalse` if condition is falsy. |

##### Returns

Returns the result of `onFalse` depending on the result of the `condition` or the `value`.

### when

`when :: Function -> Function -> Any -> Any`

Executes `onTrue` when the `condition` returns a truthy value. Otherwise `value` is returned.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import when from 'mojiscript/logic/when'
import is from 'mojiscript/types/is'

const state = 'mojiscript'

const isString = is (String)
const toUpperCase = x => x.toUpperCase ()

const main = pipe ([
  when (isString) (toUpperCase),
  log
])

run ({ state, main })
// => "MOJISCRIPT"
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| condition | `Function`  | A predicate function. |
| onTrue | `Function`  | Invoked when the predicate evaluates to a truthy value. |
| value | `Any`  | Value to be passed to condition and `onTrue` if condition is truthy. |

##### Returns

Returns the result of `onTrue` depending on the result of the `condition` or the `value`.

## string

### append

`append :: String -> String -> String`

Appends a `String` to another `String`

```javascript
import log from 'mojiscript/console/log';
import pipe from 'mojiscript/core/pipe';
import run from 'mojiscript/core/run';
import append from 'mojiscript/string/append';

const state = 'Moji'

const main = pipe ([
  append ('Script'),
  log
])

run ({ state, main })
// => "MojiScript"
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| post | `String`  | `String` to append to other `String` |
| pre | `String`  | `String` to be appended to. |

##### Returns

Appended `String`.

### prepend

`prepend :: String -> String -> String`

Prepends a `String` to another `String`

```javascript
import log from 'mojiscript/console/log';
import pipe from 'mojiscript/core/pipe';
import run from 'mojiscript/core/run';
import prepend from 'mojiscript/string/prepend';

const state = 'Script'

const main = pipe ([
  prepend ('Moji'),
  log
])

run ({ state, main })
// => "MojiScript"
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| pre | `String`  | `String` to be prepend to. |
| post | `String`  | `String` to prepend to other `String` |

##### Returns

Prepended `String`.

### replace

`replace :: String -> String -> String -> String`

Replaces all instances of `pattern` with a  `replacement` in a `string`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import replace from 'mojiscript/string/replace'

const state = 'JavaScript JavaScript JavaScript!'

const main = pipe ([
  replace ('Java') ('Moji'),
  log
])

run ({ state, main })
// => "MojiScript MojiScript MojiScript!"
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| pattern | `String`  | Pattern to search for. |
| replacement | `String`  | Replacement `String`. |
| string | `String`  | `String` to to perform replacement. |

##### Returns

Replaced `String`.

### template

`template :: Template -> Function -> String`

Creates a template function that returns a `String`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import replace from 'mojiscript/string/replace'
import $ from 'mojiscript/string/template'

const state = { first: 'Luke', last: 'Skywalker' }

const nameTemplate = $`${'first'} ${'last'}`

const main = pipe ([
  nameTemplate,
  log
])

run ({ state, main })
// => "Luke Skywalker"
```

##### Returns

Formatted string.

## threading

### sleep

`sleep :: Number -> Any -> Any`

`sleep` the application for a given number of `milliseconds`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import sleep from 'mojiscript/threading/sleep'

const state = 4

const double = x => x * 2

const main = pipe ([
  log,
  sleep (1000),
  double,
  log
])

run ({ state, main })
//=> 4
//=> (pause for 1 second)
//=> 8
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| milliseconds | `Number`  | `Number` of milliseconds to sleep. |
| value | `Any`  | Value returned at the end of `sleep`. |

##### Returns

Returns the `value` at the end of the sleep.

## type

### is

`is :: Any -> Any -> Boolean`

Checks the type of an `Object`.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import is from 'mojiscript/types/is'

const main = pipe ([
  () => log (is (Function) (x => x)),
  () => log (is (Object) ({})),
  () => log (is (Object) (new String(''))),
  () => log (is (Boolean) (true)),
  () => log (is (Array) ([])),
  () => log (is (String) ('')),
  () => log (is (Number) (1)),
  () => log (is (Set) (new Set())),
  () => log (is (Map) (new Map())),
])

run ({ main })
// => true
// => true
// => true
// => true
// => true
// => true
// => true
// => true
// => true
```

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ctor | `Object`  | A constructor. |
| value | `Any`  | Value to test. |

##### Returns

Returns `true` when the `value` is of the same type as the `Object` or `false` when it is not.
