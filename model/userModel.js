const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      avatar:{
        type: String,
    },
    avaterID:{
        type:String,
    },
    store:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"stores",
    }],

},
{timestamps:true}
)

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;