/* eslint-disable */

// recursive deep clone
const _deepClone = (obj, delayed = {}) => {
  for (const key in obj) {
    if (obj[key] != null && typeof (obj[key]) === "object") {
      delayed[key] = {}
      _cloneObject(obj[key], delayed[key]);
    } else {
      delayed[key] = obj[key];
    }
  }
  return delayed;
}

const clone = (obj) => _deepClone(obj)

module.exports = clone
