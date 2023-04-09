import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  username: String,
  handle: String,
  time: String,
  replies: Number,
  comments: Number,
  dislikes: Number,
  likes: Number,
  liked: Boolean,
  retuits: Number,
  disliked: Boolean,
  image: String


}, {collection: 'tuits'});
export default schema;