/*
 * @Author: linsp
 * @LastEditors: linsp
 * @Description: 登录接口
 * @Date: 2019-03-29 16:19:56
 * @LastEditTime: 2019-05-10 14:09:38
 */

/**
 * @description: 登录
 * @param {encryptString.userAccount}  账号
 * @param {encryptString.userPwd}  密码
 * @param {encryptString.sysUniqueKey}  ZZL_MALL_PLAT 系统唯一key
 * @return:
 */
const login = process.env.API_BASE_URL + '/login/sceneLogin' // 登录

/**
 * @description: 找回密码
 * @param {encryptString.oldPwd}  旧密码
 * @param {encryptString.mobileNo}  手机号
 * @param {encryptString.vCode}     验证码
 * @return:
 */
const retrievePwd = '/login/retrievePwd'

module.exports = {
  login,
  retrievePwd
}
