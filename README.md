# JoelScript ![project:experimental](https://img.shields.io/badge/project-experimental-orange.svg)

JoelScript is an experimental and opinionated language designed to have 100% compatibility with EcmaScript. This will allow full access to JavaScript modules (NPM) and all tooling already available to JavaScript. This means that JoelScript language features can run in any JavaScript application and vice-versa.

JoelScript's designed is derived from Functional Programming concepts such as Curying, Partial Application, Function Composition, Category Theory, and Atomic Design.

JoelScript got it name because nobody but [@joelnet](https://twitter.com/joelnet) will use this.

## Table of Contents

- [Variables](#variables)
- [Objects](#objects)
- [Expressions](#expressions)
  * [Multiple Arguments](#multiple-arguments)
  * [Compound Expressions](#compound-expressions)
  * [Named arguments](#named-arguments)
- [Pipes](#pipes)
  * [Pipes are a stream of data](#pipes-are-a-stream-of-data)
  * [Multiple arguments](#multiple-arguments)
  * [Named arguments](#named-arguments-1)
  * [Partial Application](#partial-application)
  * [Composing Pipes](#composing-pipes)
  * [Pipes are Asynchrnous](#pipes-are-asynchrnous)
- [Conditionals](#conditionals)
- [Morphisms](#morphisms)
- [Map / Filter / Reduce](#map---filter---reduce)
- [Recursion](#recursion)

## Hello World

```javascript
import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const options = 'Hello World'

const main = pipe(
  log
)

run({ main, options })
```

## Variables

Variables are constant.

```javascript
// constant
const path = './data'

path = './hello'
//=> Error("Path is read-only")
```

Variables are also mutable.

```javascript
const options = {
  // mutable
  count: 0
}

const main = pipe(
  obj => Object.assign(obj, { count: 1 }),
  log
)

run({ main, options })
//=> options({ count: 1 })
```

A variable can be a value (Number, String, Object), an Expression, or a Pipe.

## Objects

Objects are plain data objects.

```javascript
const cat = {
  name: 'mojo',
  dob: Date.parse('July 14, 2009'),
  weight: 14
}
```

note: Objects may contain functions, but those functions will not have a reference to the object itself. Behavior and data should be decoupled.

## Expressions

Expressions can be compared to a synchronous function that takes 1 argument and returns 1 argument.

```javascript
const increase = x => x + 1
```

### Multiple Arguments

Multiple arguments can be simulated with currying and closures.

```javascript
const add = x => y => x + y
add(3)(4) //=> 7
```

### Compound Expressions

Compound expressions combine multiple expressions. The last expression will return the value of the Compound Expression.

```javascript
const increase = x => (
  log(['increase', x]),
  x + 1
)
```

### Named arguments

```javascript
const add = ({ x, y }) => x + y

add({ x: 3, y: 4 }) //=> 7
```

## Pipes

Pipes can be compared to an asynchrnous function that takes 1 argument and returns 1 argument.

Each pipe can contain multiple Pipes or Function Expressions. A Pipe will return the result of the final Pipe or Function Expression.

```javascript
import pipe from 'joelscript/core/pipe'

// increase :: Number -> Number
const increase = pipe(
  x => x + 1
)

increase(1) //=> 2
```

### Pipes are a stream of data

A Pipe should be viewed as a stream of data, that performs Morphisms (or transformation between Categories) along each step.

```javascript
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import log from 'joelscript/console/log'

const options = 4

const main = pipe(
  //         |
  //         | 4
  //         ▼ 
  /*-------------------*/
  /**/  x => x + 5,  /**/
  /*-------------------*/
  //         |
  //         | 9
  //         ▼
  /*-------------------*/
  /**/  x => x * 2,  /**/
  /*-------------------*/
  //         |
  //         | 18
  //         ▼
  /*-------------------*/
  /**/      log,     /**/
  /*-------------------*/
  //         |
  //         | 18
  //         ▼
)

run({ main, options }) //=> 18
```

### Multiple arguments

Multiple arguments can be simulated with currying and closures.

```javascript
import pipe from 'joelscript/core/pipe'

// add :: Number -> Number -> Number
const add = x => pipe(
  y => x + y
)

add(3)(2) //=> 7
```

### Named arguments

```javascript
import pipe from 'joelscript/core/pipe'

const add = pipe(
  ({ x, y }) => x + y
)

add({ x: 3, y: 4 }) //=> 7
```

### Partial Application

Because Multiple Argument Pipes are curried, it is easy to create new functions with Partial Application.

```javascript
import pipe from 'joelscript/core/pipe'

// add :: Number -> Number -> Number
const add = x => pipe(
  y => x + y
)

// increase :: Number -> Number
const increase = add(1)

increase(4) //=> 5
```

### Composing Pipes

Multiple Pipes can be Composed (combined) to create a new Pipe.

```javascript
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import log from 'joelscript/console/log'

const options = 4

// increase :: Number -> Number
const increase = pipe(
  x => x + 1
)

// double :: Number -> Number
const double = pipe(
  x => x * 2
)

// increaseThenDouble :: Number -> Number
const increaseThenDouble = pipe(
  increase,
  double
)

const main = pipe(
  increaseThenDouble,
  log
)

run({ main, options }) //=> 10
```

### Pipes are Asynchrnous

Pipes are Asynchronous. The elimination of synchronous statements greatly simplifies the code. No need for `Promise`, `async`, or `await`!

```javascript
import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import sleep from 'joelscript/threading/sleep'

const options = 4

// increase :: Number -> Number
const increase = x => x + 1

// double :: Number -> Number
const double = x => x * 2

const main = pipe(
  log,
  sleep(1000),
  increase,
  double,
  log
)

run({ main, options })
//=> 4
//=> (pause for 1 second)
//=> 10
```

Note: There are not any problems with synchronous or asynchronous code. Though there are complexities when you mix asynchronous code with synchronous code.

## Conditionals

Example 1: if/else conditional

```javascript
import pipe from 'joelscript/core/pipe'
import ifElse from 'joelscript/core/ifElse'
import run from 'joelscript/core/run'
import log from 'joelscript/console/log'

const options = 7

// isEven :: Number -> Boolean
const isEven = a => a % 2 == 0

// yesOrNo :: Boolean -> String
const yesOrNo = ifElse('YES', 'NO')

const main = pipe(
  isEven,
  yesOrNo,
  log
)

run({ main, options }) //=> 'NO'
```

Example 2: switch case

```javascript
import pipe from 'joelscript/core/pipe'
import cond from 'joelscript/cond'
import run from 'joelscript/core/run'
import log from 'joelscript/console/log'

const options = 5

// dayName :: Number -> String
const dayName = cond(
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
)

const main = pipe(
  dayName,
  log
)

run({ main, options }) //=> 'Friday'
```

Example 3: if/else/elseif

```javascript
import pipe from 'joelscript/core/pipe'
import cond from 'joelscript/cond'
import run from 'joelscript/core/run'
import error from 'joelscript/console/error'
import log from 'joelscript/console/log'

const options = 100

// getTempInfo :: Number -> String
const getTempInfo = cond([
  [0, 'water freezes at 0°C'],
  [100, 'water boils at 100°C'],
  [true, temp => `nothing special happens at ${temp}°C`]
])

const main = pipe(
  getTempInfo,
  log
)

run({ main, options }) //=> 'water boils at 100°C'
```

## Morphisms

Morphisms allow us to transform an object from one Cateogry to another. The power of Morphisms can be seen when they are combined to create more complex Morphisms.

Here's a high level example of a Morphism that take an input as a `String` and returns data from an API endpoint.

```javascript
// urlToJson :: Url -> Json
const urlToJson = pipe(
  urlToAjaxResponse,
  ajaxResponseToJson,
)

// queryToCustomer :: Query -> Customer
const queryToCustomer = pipe(
  queryToUrl,
  urlToJson,
  jsonToCustomer
)
```

## Map / Filter / Reduce

`map`, `filter`, and `reduce` are your standard goto for any sort of array processing.

```javascript
import pipe from 'joelscript/core/pipe'
import map from 'joelscript/map'
import filter from 'joelscript/filter'
import reduce from 'joelscript/reduce'
import run from 'joelscript/core/run'
import log from 'joelscript/console/log'

const options = [1, 2, 3]

// isOdd :: Number -> Boolean
const isOdd = x => x % 2 !== 0

// double :: Number -> Number
const double = x => x * 2

// add :: Number -> Number -> Number
const add = x => y => x + y

// main :: [Number] -> Number
const main = pipe(
  filter(isOdd), // [1, 2, 3] => [1, 3]
  map(double), // [1, 3] => [2, 6]
  reduce(add), // [2, 6] => 8,
  log
)

run({ main, options }) // => 8
```

## Recursion

Recursion is dead simple.

```javascript
import log from 'joelscript/console/log'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'
import wait from 'joelscript/threading/wait'

const options = 1

// increase :: Number -> Number
const increase = x => x + 1

const main = pipe(
  log,
  wait(1000),
  x => main(x + 1)
)

run({ main, options })
```

FizzBuzz

```javascript
import cond from 'joelscript/cond'
import log from 'joelscript/console/log'
import run from 'joelscript/core/run'
import ifElse from 'joelscript/core/ifElse'
import gte from 'joelscript/math/gte'
import pipe from 'joelscript/core/pipe'
import recursivePipe from 'joelscript/recursivePipe'
import after from 'joelscript/threading/after'
import Nothing from 'joelscript/types/Nothing'
import allPass from 'ramda/src/allPass'

const dependencies = {
  limit: 100
}
const options = 1

// getFizzInfo :: Number -> FizzInfo
const getFizzInfo = value => ({
  value,
  fizz: value % 3 === 0,
  buzz: value % 5 === 0
})

// isFizz :: FizzInfo -> Boolean
const isFizz = ({ fizz }) => fizz

// isBuzz :: FizzInfo -> Boolean
const isBuzz = ({ buzz }) => buzz

// fizzInfoToStatus :: FizzInfo -> String | Number
const fizzInfoToStatus = cond([
  [allPass(isFizz, isBuzz), 'FizzBuzz'],
  [isFizz, 'Fizz'],
  [isBuzz, 'Buzz'],
  [() => true, ({ value }) => value]
])

// fizzBuss :: Number -> String | Number
const fizzBuzz = pipe(
  getFizzInfo,
  fizzInfoToStatus,
  log
)

// increase :: Number -> Number
const increase = x => x + 1

// main :: Number -> Number -> [String | Number]
const main = ({ limit }) => recursivePipe(next =>
  ifElse(gte(limit))(
    Nothing
  )(
    after(fizzBuzz)(
      x => next(x + 1)
    )
  )
)

run({ main, dependencies, options })
```
