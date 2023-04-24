const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/home',(req,res)=>{
    res.send('yep')
})

app.listen(3000,()=>console.log('connected to port 3000'));
mongoose.connect('mongodb://localhost:27017/ads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(console.log('connected to mongodb!'))