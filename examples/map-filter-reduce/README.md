# JoelScript Map/Filter/Reduce

JoelScript Map/Filter/Reduce example.

In this example, `map`, `filter` and `reduce` are imported from [Sanctuary](https://github.com/sanctuary-js/sanctuary). You could also use [Ramda](https://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) or any other library.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/JoelScript.git

# enter directory
cd JoelScript/examples/map-filter-reduce

# install dependencies
npm ci
```

## Run

```bash
npm start
```

You should see the output

```
8
```

## Unit Tests

Basic test run

```bash
npm test
```

Tests with coverage

```bash
npm test -- --coverage
```

Tests are written in JavaScript using Jest and should follow Jest best practices.

# Source

[index.js](index.js)
```javascript
import log from 'joelscript/console/log'
import run from 'joelscript/core/run'
import main from './main'

const dependencies = {
  log
}
const state = [ 1, 2, 3 ]

run ({ dependencies, state, main }) // => 8
```

[main.js](main.js)
```javascript
import pipe from 'joelscript/core/pipe'
import S from 'sanctuary'
import { isOdd, double, add } from './lib/math'

// main :: Dependencies -> [Number] -> Number
const main = ({ log }) =>  pipe ([
  S.filter (isOdd),   // [1, 2, 3] => [1, 3]
  S.map (double),     // [1, 3]    => [2, 6]
  S.reduce (add) (0), // [2, 6]    => 8,
  log
])

export default main
```