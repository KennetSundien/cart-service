const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  itemNumber: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productId:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  }
})
// module.exports = mongoose.model('CartItem', schema)
module.exports = schema;