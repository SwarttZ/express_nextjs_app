const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  state: { type: String, required: true },
  costPerKWh: { type: Number, required: true },
  minKWh: { type: Number, required: true },
  totalCustomers: { type: Number, required: true },
  averageRating: { type: Number, required: true },
});

module.exports = mongoose.model("Supplier", supplierSchema);
