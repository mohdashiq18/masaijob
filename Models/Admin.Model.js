const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
    companyname:{type:String,required:true},
    position: { type: String, required: true },
    contract: { type: String, required: true },
    location:{ type: String, required: true }
});

const AdminModule = mongoose.model("Admin", adminSchema);
module.exports = {
  AdminModule,
}; 