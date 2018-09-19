# MojiScript Star Wars Console

The Star Wars Console is a good example to show how easy it is to create asynchronous code (`axios`, `readline`). It is also easy to interop with JavaScript libraries (in this case node's `readline`).

Look in [`index.mjs`](index.mjs) for examples on how to inject dependencies into your application. This is the entry point to your application.

[`main.mjs`](main.mjs) is the meat of your application. You should find some good branching examples with `ifElse` in there.

Star Wars API provided by https://swapi.co/

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/star-wars-console

# install dependencies
npm ci
```

## Run

```bash
# start quietly
npm start --silent
```

Answer the prompt `Search for Star Wars Character:` and you should one of the three outputs depending on your search:

No Search:

```
Search for Star Wars Character:
No search was performed.
```

No Results:

```
Search for Star Wars Character: asdf
0 Results for "asdf".
```

Search Results:

```
Search for Star Wars Character: Skywalker
3 results:
- Luke Skywalker (male)
- Anakin Skywalker (male)
- Shmi Skywalker (female)
```

## Dependency Injection

Dependencies are loaded and injected into the `main` application in [`index.mjs`](index.mjs).

```javascript
const dependencies = {
  askQuestion,
  axios,
  log
}

run ({ dependencies, main })
```

## Async is easy

Prompting the user for input and then performing an AJAX search is simple.

```javascript
const main = ({ axios, askQuestion, log }) => pipe ([
  askQuestion ('Search for Star Wars Character: '),
  ifEmpty (showNoSearch) (searchForPerson (axios)),
  log
])
```

(Excerpt from [main.mjs](main.mjs))

## Branching logic

`ifElse` conditions can be reusable...

```javascript
const ifEmpty = ifElse (isEmpty)
```

...and a joy to work with.

```javascript
ifEmpty (showNoSearch) (searchForPerson (axios))

ifEmpty (showNoResults (search)) (showResults)
```

(Excerpt from [main.mjs](main.mjs))
