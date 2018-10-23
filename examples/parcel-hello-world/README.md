# MojiScript Hello World

Parcel Hello World example.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/parcel-hello-world

# install dependencies
npm ci
```

## Run

```bash
npm run start
```

Go to [http://localhost:1234/](http://localhost:1234/)
You should see the output

```
Hello World
```

## Code

### index.js

The id of the app is set as the `state`. `document` is also passed in as a dependency.

```javascript
import run from 'mojiscript/core/run'
import main from './main'

const state = 'app'

const dependencies = {
  document: global.document
}

run ({ dependencies, state, main })
```

### main.js

`main`, receives the id of the app from `index` and executes `getElementById` first. Then it sets the text to `'Hello World!'`.

```javascript
import pipe from 'mojiscript/core/pipe'
import { setInnerText, getElementById } from './interop/dom.js'

const main = ({ document }) => pipe ([
  getElementById (document),
  setInnerText ('Hello World!')
])

export default main
```

### interop/dom.js

Basic DOM interactions are compartmentalized off into an interop directory. This is where MojiScript can interact with classic JavaScript.

```javascript
export const setInnerText = text => element =>
  element.innerText = text

export const getElementById = document => id =>
  document.getElementById(id)
```
