const express= require('express')
const app= express()
const mongoose= require('mongoose')
const bodyparser=require('body-parser')
const jsonparser=bodyparser.json()
const cors=require('cors')
app.use(cors())
mongoose.connect('mongodb+srv://priya:1234@cluster0.pedotg2.mongodb.net/User?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{'MongoDB Atlas Connected'}).catch(
    (err)=>{console.log(err)}
)


const userdet = require("./Models/usrdata.js")

//get all the data

app.get('/alldetails',(req,res)=>{
    userdet.find({}).then(
        (data)=>{ res.json(data);}
    )
})

//app.post to add new data
app.post('/addbk',jsonparser,(req,res)=>{
    const newbook= new userdet({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Summary: req.body.Summary
})
newbook.save().then((msg)=>{res.json(msg)}).catch(
    (err)=>{console.log(err)}
)
})

//Update Data//
app.put('/updatedata/:Name',jsonparser,(req,res)=>{
    userdet.updateOne({Name:req.params.Name},
        { $set:{ 
            Name:req.body.Name,
            Summary:req.body.Summary}

        }).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})

//delete data//
app.delete('/deldata/:Name',(req,res)=>{
    userdet.deleteOne(
        {Name:req.params.Name}).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})



app.listen(3700,()=>{console.log('Server Running on 3700')})