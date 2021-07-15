const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  name: { type: String },
  bought:{type: Number, default:0}
})

const Cart = model('Cart', cartSchema);

module.exports = Cart;
