const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      last_seen: {
        type: Date
      }
    });

module.exports=mongoose.model('User',userSchema)