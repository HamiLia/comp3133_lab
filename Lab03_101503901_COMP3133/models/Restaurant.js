const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant_id: String,
  name: String,
  borough: String,
  cuisine: String,
  city: String,
  address: Object,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
