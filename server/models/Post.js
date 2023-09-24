import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    like: {
      type: Map,
      of: Boolean,
    },
    comment: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
