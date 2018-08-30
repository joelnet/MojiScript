# JoelScript

JoelScript is an experimental language designed to run within a JavaScript VM. Because of the severely opinionated coding style differences, this should not be considered JavaScript.

JoelScript's designed is derived from Functional Programming concepts such as Curying, Partial Application, Function Composition, and Category Theory.

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

## Variables

Variables are constant and also mutable. A variable can be a value (Number, String, Object), an Expression, or a Pipe.

```javascript
// constant
const path = './data'

// constant
const state = {
  // mutable
  count: 0
}

const main = pipe(
  obj => obj.count = 1
)(state)
```

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
const increase = a => a + 1
```

### Multiple Arguments

Multiple arguments can be simulated with currying and closures.

```javascript
const add = a => b => a + b
add(3)(4) //=> 7
```

### Compound Expressions

Compound expressions combine multiple expressions. The last expression will return the value of the Compound Expression.

```javascript
const increase = a => (
  console.log('increase', a),
  a + 1
)
```

### Named arguments

```javascript
const add = ({ a, b }) => a + b

add({ a: 3, b: 4 }) //=> 7
```

## Pipes

Pipes can be compared to an asynchrnous function that takes 1 argument and returns 1 argument.

Each pipe can contain multiple Pipes or Function Expressions. A Pipe will return the result of the final Pipe or Function Expression.

```javascript
import pipe from 'joelscript/pipe'

// increase :: Number -> Number
const increase = pipe(
  a => a + 1
)

increase(1) //=> 2
```

### Pipes are a stream of data

A Pipe should be viewed as a stream of data, that performs Morphisms (or transformation between Categories) along each step.

```javascript
import pipe from 'joelscript/pipe'

const main = pipe(
  a => a + 5,  // 4 + 5 => 9
  a => a * 2,  // 9 * 2 => 18
  a => a + 100 // 18 + 100 => 118
)

main(4) //=> 118
```

### Multiple arguments

Multiple arguments can be simulated with currying and closures.

```javascript
import pipe from 'joelscript/pipe'

// add :: Number -> Number -> Number
const add = a => pipe(
  b => a + b
)

add(3)(2) //=> 7
```

### Named arguments

```javascript
import pipe from 'joelscript/pipe'

const add = pipe(
  ({ a, b }) => a + b
)

add({ a: 3, b: 4 }) //=> 7
```

### Partial Application

Because Multiple Argument Pipes are curried, it is easy to create new functions with Partial Application.

```javascript
import pipe from 'joelscript/pipe'

// add :: Number -> Number -> Number
const add = a => pipe(
  b => a + b
)

// increase :: Number -> Number
const increase = add(1)

increase(4) //=> 5
```

### Composing Pipes

Multiple Pipes can be Composed (combined) to create a new Pipe.

```javascript
import pipe from 'joelscript/pipe'

// increase :: Number -> Number
const increase = pipe(
  a => a + 1
)

// increase :: Number -> Number
const double = pipe(
  a => a * 2
)

const main = pipe(
  increase,
  double
)

main(4) //=> 10
```

### Pipes are Asynchrnous

Pipes are Asynchronous. The elimination of synchronous statements greatly simplifies the code. No need for `Promise`, `async`, or `await`!

```javascript
import pipe from 'joelscript/pipe'
import wait from 'joelscript/threading/wait'

// increase :: Number -> Number
const increase = pipe(
  a => a + 1
)

// double :: Number -> Number
const double = pipe(
  a => a * 2
)

const main = pipe(
  increase,
  wait(1000),
  double
)

main(4) //=> 10
```

Note: There are not any problems with synchronous or asynchronous code. Though there are complexities when you mix asynchronous code with synchronous code.

## Conditionals

Example 1: if/else conditional

```javascript
import pipe from 'joelscript/pipe'

// isEven :: Number -> Boolean
const isEven = a => a % 2 == 0

// yesOrNo :: Boolean -> String
const yesOrNo = a => a ? 'YES' : 'NO'

const main = pipe(
  isEven,
  yesOrNo
)(7)
//=> 'NO'
```

Example 2: switch case

```javascript
import pipe from 'joelscript/pipe'
import cond from 'joelscript/cond'

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
)(5)
//=> 'Friday'
```

Example 3: if/else/elseif

```javascript
import pipe from 'joelscript/pipe'
import cond from 'joelscript/cond'

// getTempInfo :: Number -> String
const getTempInfo = cond(
  [temp => temp === 0, 'water freezes at 0°C'],
  [temp => temp === 100, 'water boils at 100°C'],
  [temp => true, temp => `nothing special happens at ${temp}°C`]
)

const main = pipe(
  getTempInfo,
)(100)
//=> 'water boils at 100°C'
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
import pipe from 'joelscript/pipe'
import map from 'joelscript/map'
import filter from 'joelscript/filter'
import reduce from 'joelscript/reduce'

// isOdd :: Number -> Boolean
const isOdd = a => a % 2 !== 0

// double :: Number -> Number
const double = a => a * 2

// add :: Number -> Number -> Number
const add = a => b => a + b

// main :: [Number] -> Number
const main = pipe(
  filter(isOdd), // [1, 2, 3] => [1, 3]
  map(double), // [1, 3] => [2, 6]
  reduce(add), // [2, 6] => 8
)

main([1, 2, 3]) // => 8
```

## Recursion

Recursion is dead simple.

```javascript
import pipe from 'joelscript/pipe'
import log from 'joelscript/console/log'
import wait from 'joelscript/threading/wait'

// increase :: Number -> Number
const increase = a => a + 1

const main = pipe(
  log,
  wait(1000),
  increase,
  main
)

main(1)
```

Recursion with a conditional exit.

```javascript
import log from 'joelscript/console/log';
import not from 'joelscript/decorators/not';
import ifElse from 'joelscript/ifElse';
import pipe from 'joelscript/pipe';
import wait from 'joelscript/threading/wait';
import Nothing from 'joelscript/types/Nothing';

// decrease :: Number -> Number
const decrease = a => a - 1

// isPositive :: Number -> Boolean
const isPositive = a => a > 0

// isNotPositive :: Number -> Boolean
const isNotPositive = not(isPositive)

// ifNotPositive :: ??
const ifNotPositive = ifElse(isNotPositive)

// pauseDecreaseContinue :: Function -> Number -> *
const pauseDecreaseContinue => func => pipe(
  wait(1000),
  decrease,
  func
)

const main = pipe(
  log,
  ifNotPositive(
    Nothing,
    pauseDecreaseContinue(main)
  )
)

main(10)
```
