# JoelScript net/axios

JoelScript net/axios example

## Install

```bash
# clone repository
git clone https://github.com/joelnet/JoelScript.git

# enter directory
cd JoelScript/examples/net-axios

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

const options = 'Hello World'

const main = pipe(
  log
)

run({ main, options })
```