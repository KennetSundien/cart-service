const mongoose = require('mongoose');
const CartItem = require('./cart-item'); 

const schema = new mongoose.Schema({
  userId :{
    type:Number,
    required:true
  },
  items: {
    type: [CartItem],
    required: true
  },
})
module.exports = mongoose.model('Cart', schema);