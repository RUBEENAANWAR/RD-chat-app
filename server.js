require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
// const cors=require('cors')
const cookieParser=require('cookie-parser')

const app=express()
app.use(express.json())
app.use(cookieParser())

  //connect to mongodb
const URI=process.env.MONGODB_URL
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.get('/',(req,res)=>{
    res.json({msg:"Welcome"})
})


const PORT= process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('Server is running on port',PORT);
})
