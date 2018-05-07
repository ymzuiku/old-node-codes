/* eslint no-console:0 */

function checkRun(...args) {
  const func = args[0];
  args.splice(0, 1);
  if (Object.prototype.toString.call(func) === '[object Function]') {
    func(...args);
  } else {
    console.warn(func, 'is no Function!');
  }
}

export {
  checkRun as default,
  checkRun,
};
