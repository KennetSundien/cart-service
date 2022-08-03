const Cart = require('../models/cart');
const mongoose = require('mongoose');

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
    Cart.findByIdAndUpdate(req.params.cartId,req.body, (err,emp)=>{
      if (err) {
        return res.status(500).send({error: "Update failed"})
      };
      res.send({success: "Update successfull"});
    })
}
module.exports.update = update;

function updateItem(req,res,next){
  Cart.findById(req.params.cartId).then((cart)=>{
    const productId = req.body.productId;
    let itemToUpdate = cart.items.find(i=>i.productId === productId);

    //Obs should we be able to update more than quantity? 
    //If we updated ie. the itemNumber or productId would this be considered a removal of the old item and an addation of the new?
    itemToUpdate.quantity = req.body.quantity;
    
    cart.save().then((_)=>{
      res.send({success: 'Update successfull'});
    });
});
}
module.exports.updateItem = updateItem;

function removeItem(req,res,next){
  console.debug('params', req.params);
  Cart.findById(req.params.cartId).then((cart)=>{
    const productId = req.params.productId;
    console.debug('cart', cart);
    cart.items.splice(cart.items.indexOf(i=>i.productId === productId), 1);

    cart.save().then((_)=>{
      res.send({success: `Deleted item with product id ${productId}`});
    });
});
}
module.exports.removeItem = removeItem;

//Obs we need to ensure that the user is allowed to delete the specific cart
function remove(req,res,next){
    Cart.findByIdAndDelete(req.params.cartId, (err,emp)=>{
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
    Cart.findById(req.params.cartId).then((data)=>{
        res.send(data);
    });
}
module.exports.single = single;

