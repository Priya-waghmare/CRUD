const mongoose= require('mongoose')

let usrSchema= new mongoose.Schema({ 
   _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    img:String,
    Summary:String
})

module.exports= mongoose.model("userdata",usrSchema)
