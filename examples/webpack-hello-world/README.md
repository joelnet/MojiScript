# Webpack Hello World

Webpack Hello World example

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/webpack-hello-world

# install dependencies
npm ci
```

## Run

```bash
npm start
```

You should see a browser window with the output

```
Hello World
```

## Code

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