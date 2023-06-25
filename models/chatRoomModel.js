const mongoose=require('mongoose')

const chatRoomSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  module.exports=mongoose.model('ChatRoom',chatRoomSchema)