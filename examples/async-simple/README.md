# MojiScript Async Simple

MojiScript Async Simple example.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/async-simple

# install dependencies
npm ci
```

## Run

```bash
npm start
```

You should see the output

```
4
(pause for 1 second)
10
```

## Code

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

const main = pipe(
  log,
  sleep (1000),
  increase,
  double,
  log
)

run ({ main, state })
```