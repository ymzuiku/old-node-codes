/* eslint import/prefer-default-export:0 */

export function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}
export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}
export function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === '[object Undefined]';
}
