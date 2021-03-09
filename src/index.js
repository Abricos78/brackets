function changer(str) {
    let sum = 0
    let result = ''
    for (let i = 1; i <= str.length; i++) {
      sum += 1
      if (str[i] !== str[i - 1]) {
        if (sum % 2 !== 0) {
          result += str[i - 1]
        }
        sum = 0
      }
    }
    return result
  }

module.exports = function check(str, bracketsConfig) {
    let result = false
    let copyStr = str.length > 20 ? changer(str) : str
    copyStr = copyStr.split('')

    bracketsConfig.forEach(el => {
        let filterStr = copyStr.filter((item, index) => {
            if (item === el[0] && copyStr[index + 1] === el[1] || item === el[1] && copyStr[index - 1] === el[0]) {
                return false
            }
            return true
        })
        if (filterStr.length !== copyStr.length) {
            result = check(filterStr.join(''), bracketsConfig)
        }
    });

    if (str === '') {
        return true
    }

    return result
}
