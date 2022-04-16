import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  "avatar-image": String,
  username: String,
  time: String,
  retuits: Number,
  comments: Number,
  liked: Boolean,
  disliked: Boolean,
  verified: Boolean,
  title: String,
  topid: String,
  video: String,
  image: String,
}, {collection: 'tuits'});
export default schema;
