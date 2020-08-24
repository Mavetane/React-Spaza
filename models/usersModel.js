var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
  email: { type: String, required: true },
  hashedPassword: { type: String, require: true }
});

var UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;

