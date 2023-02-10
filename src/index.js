module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
    if (strArr.length % 2 !== 0) {
      return false;
    }
    let arrTrue = [];
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (strArr[i] == bracketsConfig[j][0]
          && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
          arrTrue.push(strArr[i]);
          break;
        }
        else if (strArr[i] == bracketsConfig[j][1]
          && bracketsConfig[j][0] == bracketsConfig[j][1]
          && arrTrue[arrTrue.length - 1] !== bracketsConfig[j][1]) {
          arrTrue.push(strArr[i]);
          break;
        }
        else if (strArr[i] == arrTrue[arrTrue.length - 1]) {
          arrTrue.pop(strArr[i]);
          break;
        }
        else if (strArr[i] == bracketsConfig[j][1]
          && arrTrue[arrTrue.length - 1] == bracketsConfig[j][0]) {
          arrTrue.pop(strArr[i]);
          break;
        }
        else if (strArr[i] == bracketsConfig[j][1]
          && (arrTrue.length == 0 || arrTrue[arrTrue.length - 1] == bracketsConfig[j][1])) {
          return false;
        }
      }
    }
    return arrTrue.length === 0;
}