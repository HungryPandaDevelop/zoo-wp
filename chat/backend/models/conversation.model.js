import mongoose from "mongoose";

const conversationShema = new mongoose.Schema({
  participants: [
    {
      // type: mongoose.Schema.Types.ObjectId,
      type: Number,
      // ref: 'User'
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
      default: [],

    }
  ]

});


const Conversation = mongoose.model("Conversation", conversationShema);

export default Conversation;