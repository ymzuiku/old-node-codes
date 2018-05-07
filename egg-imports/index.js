var { BaseContextClass, Service, Controller } = require('egg')
var { MongoClient, Db, ObjectID } = require('mongodb')
var { Mongoose, mongo, model } = require('mongoose')
if (false) {
  var $app = new Controller().app
  var $config = new Controller().config
  var $ctx = new Controller().ctx
  var $service = new Controller().service
  var $db = new Db()
  var $coll = new Db().collection()
  var $mongoose = new Mongoose()
  var $model = $mongoose.model('', {})
}
var localhost = require('./src/localhost')
var resolvePath = require('./src/resolvePath')
module.exports = {
  $app, $config, $ctx, $db, $coll, $mongoose,$model, Mongoose, mongo, MongoClient, Db, ObjectID, BaseContextClass, Service, Controller, localhost, resolvePath
}