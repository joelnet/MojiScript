import pipe from 'mojiscript/core/pipe'
import ifElse from 'mojiscript/core/ifElse'

const rootUrl = 'https://swapi.co/api/people/'

const STATUS_CODE = {
  OK: 200
}

const responseIsOk = ({ status }) => status === STATUS_CODE.OK
const resolveResponse = ({ data }) => Promise.resolve (data.results)
const rejectResponse = ({ status, statusText }) => Promise.reject (`${status}: ${statusText}`)

const parseResponse = ifElse (responseIsOk) (resolveResponse) (rejectResponse)

// searchStringToParams :: String -> AxiosOptions
const searchStringToParams = search => ({
  params: {
    search
  }
})

// peopleSearch :: Axios -> String -> AxiosResponse
export const peopleSearch = axios => pipe ([
  searchStringToParams,
  axios.get (rootUrl),
  parseResponse
])
