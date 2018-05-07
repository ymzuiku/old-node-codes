var path = require('path')
var fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd())
var resolvePath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = resolvePath