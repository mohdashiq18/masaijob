const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  fullname:{type:String},
  email: { type: String},
  password: { type: String},
});

const UsersModule = mongoose.model("userdata", usersSchema);
module.exports = {
  UsersModule,
}; 