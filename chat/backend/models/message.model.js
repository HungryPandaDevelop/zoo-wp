import mongoose from "mongoose";

const messageShema = new mongoose.Schema({
  conversation: {
    type: Array
  },
  senderId: {
    type: Number,
    required: true
  },
  receiverId: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    // required: true
  },
  fileChat: {
    type: String,
  },
  imgEmodsy: {
    type: String,
  },
  read: {
    type: Boolean,
  }

}, { timestamps: true });


const Message = mongoose.model("Message", messageShema);

export default Message;