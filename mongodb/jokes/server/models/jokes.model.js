const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(

{
	title: {
	type: String, 
	required: [true, "Title is required"],
	minlength: [4, "Title must be at least 4 characters long"]	
	},
	content: {
	type: String,
	required: [true, "Content is required"],
	minlength: [15, "Content must be at least 15 characters long"]	
}
   }, { timestamps: true })

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;