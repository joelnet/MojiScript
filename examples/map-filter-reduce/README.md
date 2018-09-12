# MojiScript Map/Filter/Reduce

MojiScript Map/Filter/Reduce example.

You could also use `map`, `filter`, `reduce` from [Sanctuary](https://github.com/sanctuary-js/sanctuary) or [Ramda](https://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) or any other library.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/map-filter-reduce

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
import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import main from './main'

const dependencies = {
  log
}
const state = [ 1, 2, 3 ]

run ({ dependencies, state, main }) // => 8
```

[main.js](main.js)
```javascript
import pipe from 'mojiscript/core/pipe'
import filter from 'mojiscript/list/filter'
import map from 'mojiscript/list/map'
import reduce from 'mojiscript/list/reduce'
import { add, double, isOdd } from './lib/math'

// main :: Dependencies -> [Number] -> Number
const main = ({ log }) =>  pipe ([
  filter (isOdd),   // [1, 2, 3] => [1, 3]
  map (double),     // [1, 3]    => [2, 6]
  reduce (add) (0), // [2, 6]    => 8,
  log
])

export default main
```