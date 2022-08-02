const express = require('express')
var app = express()

//Route
app.get('/',function(req,res){
  res.send('hello world')
})

const cartsRoutes = require('./routes/carts')
app.use('/carts',cartsRoutes);

//MongoDB connection
var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect('mongodb://mongo:27017/carts', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

//Server
app.listen(8000,function(){
  console.log('Server is Up')
})