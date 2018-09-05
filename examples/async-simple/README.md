# JoelScript Async Simple

JoelScript Async Simple example.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/JoelScript.git

# enter directory
cd JoelScript/examples/async-simple

# install dependencies
npm ci
```

## Run

```bash
npm start
```

You should see the output

```
Hello World
```

## Code

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

run({ main, options }) //=> 10
```