'use strict';

var _ = require('lodash');
var Userinfo = require('./userInfo.model');

// Get list of userInfos
exports.index = function(req, res) {
  Userinfo.find(function (err, userInfos) {
    if(err) { return handleError(res, err); }
    return res.json(200, userInfos);
  });
};

// Get a single userInfo
exports.show = function(req, res) {
  Userinfo.findById(req.params.id, function (err, userInfo) {
    if(err) { return handleError(res, err); }
    if(!userInfo) { return res.send(404); }
    return res.json(userInfo);
  });
};

// Creates a new userInfo in the DB.
exports.create = function(req, res) {
  Userinfo.create(req.body, function(err, userInfo) {
    if(err) { return handleError(res, err); }
    return res.json(201, userInfo);
  });
};

// Updates an existing userInfo in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Userinfo.findById(req.params.id, function (err, userInfo) {
    if (err) { return handleError(res, err); }
    if(!userInfo) { return res.send(404); }
    var updated = _.merge(userInfo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, userInfo);
    });
  });
};

// Deletes a userInfo from the DB.
exports.destroy = function(req, res) {
  Userinfo.findById(req.params.id, function (err, userInfo) {
    if(err) { return handleError(res, err); }
    if(!userInfo) { return res.send(404); }
    userInfo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}