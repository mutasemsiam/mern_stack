const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
// {
// name:  String ,
// age: Number 
// }, 
// { timestamps: true }
// )

//OR 
{
	name: {
	type: String, 
	required: [true, "Name is required"],
	minlength: [4, "Name must be at least 4 characters long"]	
	},
	age: {
	type: Number,
	min: [1, "You must be at least 1 or older"],
	max: [100, "You must be at most 100 years old"]
}
   }, { timestamps: true })

const User = mongoose.model("User", UserSchema);

module.exports = User;