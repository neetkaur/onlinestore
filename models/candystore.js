const { Schema, model } = require('mongoose');

const candystoreSchema = new Schema({
  name: { type: String, required: true},
  description: { type: String},
  img: { type: String},
  price: {type: Number, minimum: 0},
  qty:{type: Number, minimum: 0}
})

const CandyStore = model('CandyStore', candystoreSchema);

module.exports = CandyStore;
