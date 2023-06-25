const mongoose=require ('mongoose')

const messageSchema= new mongoose.Schema({
        chat_room_id: {
          type: Schema.Types.ObjectId,
          ref: 'ChatRoom',
          required: true
        },
        sender_id: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        content: {
          type: String,
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
})

module.exports=mongoose.model('Message',messageSchema)