const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const commentSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
});

const Comment = model("Comment", commentSchema);
module.exports = Comment;
