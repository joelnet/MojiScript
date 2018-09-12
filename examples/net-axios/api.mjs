import pipe from 'mojiscript/core/pipe'

const rootUrl = 'https://swapi.co/api/people/'

const STATUS_CODE = {
  OK: 200
}

const parseResponse = response =>
  response.status === STATUS_CODE.OK
    ? Promise.resolve(response.data.results)
    : Promise.reject(`${response.status}: ${response.statusText}`)

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
