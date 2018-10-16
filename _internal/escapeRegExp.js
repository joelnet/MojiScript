/* from: https://stackoverflow.com/a/1144788/504836 */

const escapeRegExp = str => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')

module.exports = escapeRegExp
