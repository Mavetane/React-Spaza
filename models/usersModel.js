var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

});

var UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;

