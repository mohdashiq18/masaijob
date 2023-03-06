const mongoose = require("mongoose");
const userjobSchema = mongoose.Schema({
    company:{type:String,required:true},
    position: { type: String, required: true },
    contract: { type: String, required: true },
    location:{ type: String, required: true }
});

const UserjobModule = mongoose.model("UserJobs", userjobSchema);
module.exports = {
  UserjobModule,
};