#!/usr/bin/env node

const os = require('os')
const fs = require('fs-extra')
const path = require('path')
const R = require('ramda')
const package = require('./package.json')
const program = require('commander');
const homedir = os.userInfo().homedir

var __root = path.resolve(__dirname, './')
var to = path.resolve(process.cwd(), process.argv[2])

// 需要拷贝的文件列表
let copyFiles = [
  'bin.js',
  'package.json',
  'app',
  // 'node_modules',
  'config',
  '.eslintrc',
  '.gitignore',
  'README.md'
]

function doNodeModules() {
  copyFiles.push('node_modules')

}
function doReact() {
  copyFiles.push('client-react')
}

function doVue() {
  copyFiles.push('client-vue')
}

function doNative() {
  copyFiles.push('client-native')
}

function doXP() {
  copyFiles.push('client-xp')
}

function doAll() {
  doDefault()
  doReact()
  doVue()
  doNative()
  doXP()
}

function doCopy() {
  copyFiles.map((v, i) => {
    console.log('copy: ', path.resolve(to, v))
    fs.copySync(__root + '/' + v, path.resolve(to, v))
  })
}

console.log(`   Start...`)
program
  .version(package.version, '-v, --version')
  .option('-m, --node-modules', 'creact client-native', doNodeModules)
  .option('-n, --native', 'creact client-native', doNative)
  .option('-r, --react', 'creact client-react', doReact)
  .option('-v, --vue', 'creact client-vue', doVue)
  .option('-x, --reactxp', 'creact client-xp', doXP)
  .option('-all, --all', 'creact client-native', doAll)
  .parse(process.argv);

doCopy()
console.log(`   Done!`)