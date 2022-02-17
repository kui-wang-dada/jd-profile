/**
 * 将秒数转为时间格式
 *
 * @format
 * @param {number} second
 */

export * from './constant'

/**
 * 异常处理
 * @param {boolean} condition
 * @param {string} msg
 */
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`)
}

/**
 * 拿缓存数据
 * @param {String} key
 */
export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * 设置缓存数据
 * @param {String} key
 * @param {all} val
 */
export function setStorage(key, val) {
  return localStorage.setItem(key, JSON.stringify(val))
}
