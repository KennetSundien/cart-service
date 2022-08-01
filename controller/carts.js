const Cart = require('../models/cart')
const mongoose = require('mongoose')


function create(req,res,next){
let userId = req.body.userId;
let items = req.body.items;

let cart = new Cart({
    userId,
    items
});
  
  cart.save().then((data)=>{
    res.send(data);
  });
}
module.exports.create = create;

function update(req,res,next){
    Cart.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
      if (err) {
        return res.status(500).send({error: "Update failed"})
      };
      res.send({success: "Update successfull"});
    })
}
module.exports.update = update

function remove(req,res,next){
    Cart.findByIdAndDelete(req.params.id, (err,emp)=>{
      if(err){
        return res.status(500).send({error: "Delete failed"})
      }
      res.send({success: 'Cart deleted successfully'})
    })
  }
module.exports.remove = remove

function list(req,res,next){ 
    Cart.find({}).then((data)=>{
        res.send(data);
    });
}
module.exports.list = list;

function single(req,res,next){ 
    Cart.findById(req.params.id).then((data)=>{
        res.send(data);
    });
}
module.exports.single = single;

