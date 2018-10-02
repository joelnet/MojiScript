# [MojiScript API](https://github.com/joelnet/MojiScript#readme)

> MojiScript is an Async First, opinionated, and functional language designed to have 100% compatibility with JavaScript engines.

## core

### into (prop) (func) (value)

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
// => { value: 5, isEven: false, isTrue: true }
```

##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prop | `String` | Property to set in `value`.
| func | `Function(a -> b)`  | A `Function` that takes `value` and returns the computed result |
| value | `Object` | `Object` passed to `func` and `prop` is set into. |

##### Returns

Returns the input `Object` with the addition of `prop` attached set to the return value of `func(value)`.

### pipe (funcs) (value)

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

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| funcs | `[Function(a -> b)]`  | A `Function` that takes `value` and returns the computed result |
| value | `Object` | `Object` passed to `func` and `prop` is set into. |

##### Returns

Returns the result of the last function in the `pipe`.

### pipeR (funcs) (value)

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

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  | run options. |
| options.dependencies | `Object`  | Collection of dependencies. |
| options.state | `Any`  | Parameter to send to `pipe`. |
| options.main | `Function`  | Main `pipe` to run. |

##### Returns

Returns the result of the last function in the `pipe`.

## function

### apply (func) (value)

documentation needed.

### curry (number) (func)

documentation needed.

### tap (func) (value)

documentation needed.

## list

### filter (func) (iterable)

documentation needed.

### map (func) (iterable)

documentation needed.

### range (start) (end)

documentation needed.

### reduce (func) (initial) (iterable)

documentation needed.

## logic

### allPass (funcs) (value)

documentation needed.

### anyPass (funcs) (value)

documentation needed.

### cond (Array) (value)

documentation needed.

### ifElse (condition) (onTrue) (onFalse) (value)

documentation needed.

### ifError (func) (onError) (onSuccess) (value)

documentation needed.

### unless (condition) (func) (value)

documentation needed.

### when (func) (func) (value)

documentation needed.

## string

### append (post) (pre)

documentation needed.

### prepend (pre) (post)

documentation needed.

### replace (what) (replacement) (value)

documentation needed.

### template

documentation needed.

## threading

### sleep (milliseconds) (value)

documentation needed.

## types

### is (Object)

documentation needed.
