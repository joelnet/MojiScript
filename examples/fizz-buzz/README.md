# MojiScript Fizz Buzz

MojiScript Fizz Buzz

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/fizz-buzz

# install dependencies
npm ci
```

## Run

```bash
npm start
```
## Tutorial

There is a very good tutorial that will walk you through the creation of this FizzBuzz app here:

[Getting started with MojiScript: FizzBuzz (part 1)
](https://dev.to/joelnet/getting-started-with-mojiscript-fizzbuzz-part-1-2fji)

[Getting started with MojiScript: Async, Infinity, Testing (part 2)](https://dev.to/joelnet/getting-started-with-mojiscript-async-infinity-testing-part-2-h1e)

## Code

```javascript
import cond from 'mojiscript/logic/cond'
import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import range from 'mojiscript/list/range'
import allPass from 'mojiscript/logic/allPass'

const isFizz = num => num % 3 === 0
const isBuzz = num => num % 5 === 0
const isFizzBuzz = allPass ([ isFizz, isBuzz ])

const fizziness = cond ([
  [ isFizzBuzz, 'FizzBuzz' ],
  [ isFizz, 'Fizz' ],
  [ isBuzz, 'Buzz' ],
  [ () => true, x => x ]
])

const logFizziness = log => pipe ([
  fizziness,
  log
])

const main = ({ log }) => pipe ([
  ({ start, end }) => range (start) (end + 1),
  map (logFizziness (log))
])

export default main
```
