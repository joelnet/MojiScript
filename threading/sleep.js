
const sleep = (milliseconds, {signal} = {}) => value => {

   if (signal) {
        if (signal.aborted) {
            return Promise.reject(new DOMException("AbortError"))
        }
   }
    return new Promise((resolve, reject) => {
        let timeoutId
        if (signal) {
             signal.onabort = () => {
                 if (timeoutId) {
                     clearTimeout(timeoutId)
                     timeoutId = undefined
                     reject(new DOMException("AbortError"))
                 }
             }
        }
        timeoutId = setTimeout(() => resolve(value), milliseconds)
    })
}

module.exports = sleep
