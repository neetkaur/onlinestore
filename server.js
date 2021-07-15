//Declare all variables
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const CandyStore = require('./models/candystore')
const Cart =require('./models/cart')

//set up mongoose
const db = require('./models/db')
db.once('connected', () => {
  console.log('Connected to Mongo')
})


//set up app
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.listen(PORT, () => {console.log('Listening to PORT ', PORT)})

app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

app.use('/candystore', require('./controllers/routeController'));

/*
//------------ROUTES--------------

//NEW ROUTE
app.get('/candystore/new',(req,res)=>{
  res.render('New')
})

//INDEX ROUTES
app.get('/candystore/', (req, res) => {

})

//POST
app.post("/candystore",(req,res)=>{

})

//SHOW
app.get('/candystore/:id', (req, res) => {
  console.log("entered SHOW")

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

})

//DELETE  Route
app.delete('/candystore/:id', (req, res) => {
  console.log("enetered DELETE")

})

//BUY_UPDATE Route
app.put('/candystore/buy/:id', (req, res) => {

})
*/
