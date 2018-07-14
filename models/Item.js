const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  itemName: {
    type: String,
    required: false
  },
  itemCount: {
    type: Number,
    required: false
  },
  itemPrice: {
    type: Number,
    required: false
  },
  totalPrice: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
