const CandyStore = require('../models/candystore')
const Cart = require('../models/cart')


const dataController = {
  index(req, res, next){
    CandyStore.find({}, (err, foundCandy)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
          res.locals.data.candy= foundCandy
          next()
      }
    })
  },
  show(req, res, next){
    CandyStore.findById(req.params.id, (err, oneCandy)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.candy= oneCandy
        next()
      }
    })
  },
  create(req, res, next){
    CandyStore.create(req.body,(err,createdCandy)=>{
      //console.log(req.body)
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }
      else{
        res.locals.data.candy = createdCandy
        next()
      }
    })

  },
  destroy(req, res, next){
    CandyStore.findByIdAndDelete(req.params.id, (err, deletedcandy)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.candy = deletedcandy
        next()
      }
    })
  },
  update(req, res, next){
    CandyStore.findByIdAndUpdate(req.params.id, req.body,{ new: true},(err, updatedcandy)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.candy = updatedcandy
        next()
      }
    })
  },
  buy_update(req, res, next){
  CandyStore.findByIdAndUpdate(req.params.id, { $inc: {'qty': -1 } },{ new: true},(err, updatedcandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
      } else {
        res.locals.data.candy=updatedcandy
        next()
      }
    })
  },
  showcart(req, res, next){
    Cart.find({}, (err, candycart)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.candy= candycart
        next()
      }
    })
  }
}

module.exports = dataController;
