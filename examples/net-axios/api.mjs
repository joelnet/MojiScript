import pipe from 'joelscript/core/pipe'

const rootUrl = 'https://swapi.co/api/people/'

// searchStringToParams :: String -> AxiosOptions
const searchStringToParams = search => ({
  params: {
    search
  }
})

// peopleSearch :: Axios -> String -> AxiosResponse
export const peopleSearch = axios => pipe([
  searchStringToParams,
  axios.get(rootUrl),
])
