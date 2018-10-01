import W from 'mojiscript/combinators/W'
import pipe from 'mojiscript/core/pipe'
import tap from 'mojiscript/function/tap'
import readline_ from 'readline'

export const createInterface = ({
  input = process.stdin,
  output = process.stdout
} = {}) => {
  const line = readline_.createInterface({ input, output })
  const question = output => new Promise(resolve =>
    line.question(output, resolve)
  )
  const close = () => line.close()
  
  return {
    question,
    close
  }
}

export const askQuestion = ask => pipe ([
  createInterface,
  W (({ question, close }) => pipe ([
    question (ask),
    tap (close)
  ]))
])