//Declare all variables
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const CandyStore = require('./models/candystore')

//set up mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})


//set up app
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.listen(PORT, () => {console.log('Listening to PORT ', PORT)})

//------------ROUTES--------------

//NEW ROUTE
app.get('/candystore/new',(req,res)=>{
  res.render('New')
})

//INDEX ROUTES
app.get('/candystore/', (req, res) => {
  CandyStore.find({}, (err, foundCandy)=>{
    console.log("entered INDEX")
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        CandyStoreJS: foundCandy
      })
    }
  })
})

//POST
app.post("/candystore",(req,res)=>{
  CandyStore.create(req.body,(err,createdCandy)=>{
    console.log("entered POST")
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }
    else{
      console.log(createdCandy)
      res.redirect('/candystore')
    }
  })
})

//SHOW
app.get('/candystore/:id', (req, res) => {
  console.log("entered SHOW")
  CandyStore.findById(req.params.id, (err, oneCandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      console.log(oneCandy)
       res.render('Show', {
         CandyStoreJS: oneCandy
       })
    }
  })
})

//EDIT
app.get('/candystore/:id/edit', (req, res) => {
  CandyStore.findById(req.params.id, (err, editedcandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        CandyStoreJS: editedcandy
      })
    }
  })
})

//PUT Route
app.put('/candystore/:id', (req, res) => {
  CandyStore.findByIdAndUpdate(req.params.id, req.body,{ new: true},(err, updatedcandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        CandyStoreJS: updatedcandy
      })
    }
  })
})

//DELETE  Route
app.delete('/candystore/:id', (req, res) => {
  console.log("enetered DELETE")
  CandyStore.findByIdAndDelete(req.params.id, (err, deletedcandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      console.log(deletedcandy)
      res.redirect('/candystore')
    }
  })
})

//BUY_UPDATE Route
app.put('/candystore/buy/:id', (req, res) => {
  CandyStore.findByIdAndUpdate(req.params.id, { $inc: {'qty': -1 } },{ new: true},(err, updatedcandy)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        CandyStoreJS: updatedcandy
      })
    }
  })
})
