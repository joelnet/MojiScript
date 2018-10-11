# MojiScript Recursion

MojiScript Recursion example.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/recursion

# install dependencies
npm ci
```

## Run

```bash
npm start
```

You should see the output

```
1
2
3
4
5
6
...
```
Will keep printing numbers every 1 second.

## Code

```javascript
import log from 'mojiscript/console/log'
import pipe from 'mojiscript/core/pipe'
import run from 'mojiscript/core/run'
import wait from 'mojiscript/threading/sleep'

const state = 1

const main = pipe ([
  log,
  wait (1000),
  x => main (x + 1)
])

run ({ state, main })
```