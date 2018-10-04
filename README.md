# MojiScript ![project:experimental](https://img.shields.io/badge/project-experimental-orange.svg) [![build status](https://travis-ci.org/joelnet/MojiScript.svg?branch=master)](https://travis-ci.org/joelnet/MojiScript) [![Coverage Status](https://coveralls.io/repos/github/joelnet/MojiScript/badge.svg?branch=master)](https://coveralls.io/github/joelnet/MojiScript?branch=master)

MojiScript is an Async First, opinionated, and functional language designed to have 100% compatibility with JavaScript engines. This will allow full access to JavaScript modules (NPM) and all tooling already available to JavaScript. This means that MojiScript language features can run in any JavaScript application and vice-versa.

MojiScript's design is derived from Functional Programming concepts such as Currying, Partial Application, Function Composition, Category Theory, and Atomic Design.

## Table of Contents

- [Benefits](#benefits)
- [Install & Build](#install-and-build)
- [Examples](#examples)
  * [Hello World](#hello-world)
  * [More Examples](#more-examples)
- [Style Guide](#style-guide)
- [Complementary Libraries](#complementary-libraries)
- [Variables](#variables)
- [Objects](#objects)
- [String Templates](#string-templates)
- [Expressions](#expressions)
  * [Multiple Arguments](#multiple-arguments)
  * [Compound Expressions](#compound-expressions)
- [Pipes](#pipes)
  * [Pipes are a stream of data](#pipes-are-a-stream-of-data)
  * [Multiple arguments](#multiple-arguments)
  * [Partial Application](#partial-application)
  * [Composing Pipes](#composing-pipes)
  * [Pipes are Asynchrnous](#pipes-are-asynchrnous)
- [Conditionals](#conditionals)
- [Error Handling](#error-handling)
  * [Synchronous Error Handling](#synchronous-error-handling)
  * [Asynchronous Error Handling](#asynchronous-error-handling)
  * [Error Handling with Sanctuary](#error-handling-with-sanctuary)
- [Morphisms](#morphisms)
- [Application Layout](#application-layout)
- [Unit Tests](#unit-tests)
- [Recursion](#recursion)

## Benefits

- The Asynchronous-first design greatly simplifies writing and reasoning about Asynchronous code. Worry less about callbacks, promises, async, await, etc.
- Atomic Design, function composition, and Pipes encourages maximum code re-use, testability and the ability to compose smaller functions into larger ones.
- Compatibility with ECMAScript gives our applications full access to the JavaScript ecosystem. It also allows us to import elements from MojiScript into existing JavaScript applications.
- A modular design allows for features to be imported on an as needed basis, keeping packages small. It also allows for elements like `map`, `filter`, `reduce` to be swapped out for 3rd party libraries, like Sanctuary or Ramda.
- Plays well with functional libraries. Check out the [Complementary Libraries](#complementary-libraries) section for libraries that can benefit your MojiScript applications.

## Install and Build

Install `mojiscript` and `eslint` packages.

```javascript
npm install -P mojiscript
npm install -D eslint eslint-plugin-fp eslint-watch
```

Download eslint configuration files.

```bash
curl -o .eslintignore https://raw.githubusercontent.com/joelnet/MojiScript/master/.eslintignore
curl -o .eslintrc.yml https://raw.githubusercontent.com/joelnet/MojiScript/master/.eslintrc.yml
```

Add a `build` and `watch` step to `package.json`.

```javascript
{
  "scripts": {
    "build": "eslint . --ext .js,.mjs",
    "watch": "esw -w --fix --ext .js,.mjs"
  }
}
```

Run the `build` script.

```bash
npm run build
```

During development you can auto-fix and format on save with the `watch` script.

```bash
npm run watch
```

## Examples

### Hello World

[view the source](examples/async-simple)

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const state = 'Hello World'

const main = pipe ([
  log
])

run ({ state, main })
```

### More Examples

- [Star Wars Console](examples/star-wars-console) - Check this out!
- [Express Hello World](examples/express-hello-world) - Express "Hello World" web server.
- [Async Simple](examples/async-simple)
- [Hello World](examples/hello-world)
- [Conditionals](examples/conditionals)
- [map/filter/reduce](examples/map-filter-reduce)
- [FizzBuzz](examples/fizz-buzz)

## Style Guide

All values must be declared with `const`.

```javascript
// BAD
let value = {}

// GOOD
const value = {}
```

Variables should be named in lower camel case.

```javascript
// BAD
const AddNumbers = x => y => x + y

// GOOD
const addNumbers = x => y => x + y
```

Expressions or Pipes and their arguments should be separated with a space. Arguments should be surrounded with parentheses. Further discussed at [#438](https://github.com/sanctuary-js/sanctuary/issues/438).

```javascript
// BAD
add(1)(2)

// GOOD
add (1) (2)
```

Prefer String Templates

```javascript
// BAD
const func = x => `Value: ${x}`

// GOOD
const func = $`Value: ${0}`

// BAD
const func = ({ prop }) => `Prop: ${prop}`

// GOOD
const func = $`Prop: ${'prop'}`
```

Following Atomic Design principles, code should be broken down into Atoms. This maximizes reusability, testability, composability, and readability.

```javascript
// BAD
const getOrdersText = ifElse (({ length }) => length > 0) ($`${0} orders`) ($`No Orders`)

// GOOD
const hasOrders = ({ length }) => length > 0
const getOrdersText = ifElse (hasOrders) ($`${0} orders`) ($`No Orders`)

// GOOD
const hasOrders = ({ length }) => length > 0
const ifHasOrders = ifElse (hasOrders)
const getOrdersText = ifHasOrders ($`${0} orders`) ($`No Orders`)
```

`ifElse` and the condition should be on the same line. Longer statements can be broken out into multiple lines. If it is long, consider breaking it down further.

```javascript
// BAD
ifElse
  (lessThan0)
  (Math.abs)
  (Math.sqrt)

// GOOD
ifElse (lessThan0) (Math.abs) (Math.sqrt)

// GOOD
ifElse (lessThan0)
  (Math.abs)
  (Math.sqrt)
```

Pipes must be multi-line.

```javascript
// BAD
const main = pipe ([ add ])

// GOOD
const main = pipe ([
  add
])
```

Arrays must have a space after the opening bracket and before the closing bracket.

```javascript
// BAD
const array = [1, 2, 3]

// GOOD
const array = [ 1, 2, 3 ]
```

No semi-colons.

```javascript
// BAD
const value = 888;

// GOOD
const value = 888
```

## Complementary Libraries

- [Sanctuary](https://github.com/sanctuary-js/sanctuary) - Recommended collection of useful functions.
- [Ramda](https://ramdajs.com/) - Another recommended collection of useful functions.
- [List](https://github.com/funkia/list) - 🐆 An immutable list with unmatched performance and a comprehensive functional API. (use `list/curried`)

## Variables

Variables are constant.

```javascript
// constant
const path = './data'

path = './hello'
//=> Error("Path is read-only")
```

Objects declared with `const` are now also immutable!

```javascript
const state = {
  // mutable
  count: 0
}

state.count = 1
//=> error  Unallowed reassignment  fp/no-mutation
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

## String Templates

String Templates make strings a joy to work with.

```javascript
import $ from 'mojiscript/string/template'

const searchTemplate = $`Searching for: "${0}"`
const nameTemplate = $`${'first'} ${'last'}`

searchTemplate ('Skywalker') //=> 'Searching for: "Skywalker"'
nameTemplate ({ first: 'Luke', last: 'Skywalker' }) //=> 'Luke Skywalker'
```

Have a look at the [Axios Example](examples/net-axios) for more on how String Templates can improve your code.

## Expressions

Expressions can be compared to a synchronous function that takes 1 argument and returns 1 argument.

```javascript
const increase = x => x + 1
```

### Multiple Arguments

Multiple arguments can be simulated a couple different ways.

**Currying and Closures**

```javascript
const add = x => y => x + y
add (3) (4) //=> 7
```

**Objects**

```javascript
const add = ({ x, y }) => x + y
add ({ x: 3, y: 4 }) //=> 7
```

**Arrays**

```javascript
const add = ([x, y]) => x + y
add ([3, 4]) //=> 7
```

### Compound Expressions

Compound expressions combine multiple expressions. The last expression will return the value of the Compound Expression. This is typically done to handle side effects.

```javascript
const tap = func => value => (
  func(value),
  value
)
```

## Pipes

Pipes can be compared to an asynchrnous function that takes 1 argument and returns 1 argument.

Each pipe can contain multiple Pipes or Expressions. A Pipe will return the result of the final Pipe or Expression.

```javascript
// increase :: Number -> Number
const increase = pipe ([
  x => x + 1
])

increase (1) //=> 2
```

### Pipes are a stream of data

A Pipe should be viewed as a stream of data, that performs Morphisms (or transformation between Categories) along each step.

```javascript
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import log from 'mojiscript/console/log'

const state = 4

const main = pipe ([
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
])

run ({ state, main }) //=> 18
```

### Multiple arguments

Multiple arguments can be simulated a couple different ways.

**Currying and Closures**

```javascript
// add :: Number -> Number -> Number
const add = x => pipe ([
  y => x + y
])

add (3) (4) //=> 7
```

**Objects**

```javascript
const add = pipe ([
  ({ x, y }) => x + y
])

add ({ x: 3, y: 4 }) //=> 7
```

**Arrays**

```javascript
const add = pipe ([
  ([x, y]) => x + y
])

add ([3, 4]) //=> 7
```

### Partial Application

Because Multiple Argument Pipes are curried, it is easy to create new functions with Partial Application.

```javascript
// add :: Number -> Number -> Number
const add = x => pipe ([
  y => x + y
])

// increase :: Number -> Number
const increase = add (1)

increase (4) //=> 5
```

### Composing Pipes

Multiple Pipes can be Composed (combined) to create a new Pipe.

```javascript
// increase :: Number -> Number
const increase = pipe ([
  x => x + 1
])

// double :: Number -> Number
const double = pipe ([
  x => x * 2
])

// increaseThenDouble :: Number -> Number
const increaseThenDouble = pipe ([
  increase,
  double
])
```

### Pipes are Asynchrnous

Pipes are Asynchronous. The elimination of synchronous statements greatly simplifies the code. No need for `Promise`, `async`, or `await`!

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import sleep from 'mojiscript/threading/sleep'

const state = 4

// increase :: Number -> Number
const increase = x => x + 1

// double :: Number -> Number
const double = x => x * 2

const main = pipe ([
  log,
  sleep (1000),
  increase,
  double,
  log
])

run ({ state, main })
//=> 4
//=> (pause for 1 second)
//=> 10
```

Note: There are not any problems with synchronous or asynchronous code. Though there are complexities when you mix asynchronous code with synchronous code.

## Conditionals

Example 1: if/else conditional

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

// isEven :: Number -> Boolean
const isEven = x => x % 2 == 0

// yesOrNo :: Boolean -> String
const yesIfEven = ifElse (isEven) ($`Yes, ${0} is even.`) ($`NO, ${0} is not even.`)

// main :: Number -> String
const main = ({ log }) => pipe ([
  yesIfEven,
  log
])

run({ dependencies, state, main }) //=> 'NO, 7 is not even.'
```

Example 2: switch case

```javascript
import logF from 'mojiscript/console/logF'
import cond from 'mojiscript/logic/cond'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'

const dependencies = {
  logF
}
const state = new Date().getDay()

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

run({ dependencies, state, main }) //=> 'Friday'
```

Example 3: if/else/elseif

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

run({ dependencies, state, main }) //=> 'water boils at 100°C'
```

## Error Handling

```javascript
import ifError from 'mojiscript/logic/ifError'
```

### Synchronous Error Handling

```javascript
const fail = err => ({ err })
const pass = value => ({ value })
const func = ifError (maybeThrowError) (fail) (pass)

func ('fail') //=> { err: [Error: Oops!] }
func (1) //=> { value: 1 }
```

### Asynchronous Error Handling

Asynchronous error handling is no different than Synchronous error handling.

```javascript
const func = ifError (maybeThrowErrorAsync) (fail) (pass)

func ('fail') //=> then { err: [Error: Oops!] }
func (1) //=> then { value: 1 }
```

### Error Handling with Sanctuary

Sanctuary makes error handling easy with the [Either type](https://github.com/sanctuary-js/sanctuary#either-type).

```javascript
const func = ifError (maybeThrowError) (S.Left) (S.Right)

func ('fail') //=> Left (new Error ("Oops!"))
func (1) //=> Right (1)
```

## Morphisms

Morphisms allow us to transform an object from one Category to another. The power of Morphisms can be seen when they are combined to create more complex Morphisms.

Here's a high level example of a Morphism that take an input as a `String` and returns data from an API endpoint.

```javascript
// urlToJson :: Url -> Json
const urlToJson = pipe ([
  urlToAjaxResponse,
  ajaxResponseToJson,
])

// queryToCustomer :: Query -> Customer
const queryToCustomer = pipe ([
  queryToUrl,
  urlToJson,
  jsonToCustomer
])
```

## Application Layout

```
app/
├── dist/
└── src/
    ├── __tests__/
    │   └── main.test.js
    ├── index.js
    └── main.js
```

- `dist/` - Bundled or Babeled output folder.
- `src/` - It is recommended to create an `src/` folder when your source requires transpiling with something like Webpack or Babel.
- `__tests__/` - Testing is not optional. Keep tests close to your code.
- `index.js` - Entrypoint to your application. This will load all dependencies as well as execute `main`. Can be excluded from tests.
- `main.js` - Decoupling from dependecies and start allows for easy testing.

## Unit Tests

Check out the [map/filter/reduce example](examples/map-filter-reduce) for an example on how to write unit tests.

## Recursion

Recursion is dead simple.

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import wait from 'mojiscript/threading/sleep'

const state = 1

// increase :: Number -> Number
const increase = x => x + 1

const main = pipe ([
  log,
  wait (1000),
  increase,
  x => main (x)
])

run ({ state, main })
```
