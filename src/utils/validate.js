//* ***************************************正则 begin********************************************/

// 判断是否为空
export function checkIsNull (str) {
  var re = /^\s*$/g
  return re.test(str)
}
// 判断是否为数字
export function checkIsNumber (str) {
  var re = /^[0-9]+.?[0-9]*$/
  return re.test(str)
}
// 判断是否正整数
export function checkIsPosNumber (str) {
  var re = /^[0-9]*[1-9][0-9]*$/
  return re.test(str)
}
// 判断密码8到16位数字和字母
export function checkPassword (str) {
  var re = /^[a-zA-Z0-9]{8,16}$/
  return re.test(str)
}
// 判断手机号是否正确
export function checkMobile (str) {
  var myreg = /^[1][3456789]\d{9}$/
  return myreg.test(str)
}
// 联系电话
export function checkTelephone (str) {
  var myreg1 = /^[1][3456789]\d{9}$/
  var myreg2 = /^[0]\d{9,11}$/
  return myreg1.test(str) || myreg2.test(str)
}

// 判断姓名
export function checkUserName (str) {
  var re = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/
  var re2 = /^([A-Za-z]+\s?)*[A-Za-z]$/
  var re3 = /(^[\u2E80-\uFE4F]{2,32}$)|(^[a-zA-Z]{2,32}$)/
  return re.test(str) || re2.test(str) || re3.test(str)
}
