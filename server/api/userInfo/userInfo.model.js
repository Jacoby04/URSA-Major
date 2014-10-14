'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserinfoSchema = new Schema({
  userName: String,
  userPresenterName: String,
  userEmail: String,
  userRole: String,
  userTShirtSize: String
});


module.exports = mongoose.model('Userinfo', UserinfoSchema);