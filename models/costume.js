const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {type:String,required:true}, 
 cost: {type:Number ,min:10,max:100}
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 