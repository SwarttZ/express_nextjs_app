const Supplier = require("../models/supplierModel.js");

const getEligibleSuppliers = async (req, res) => {
  const consumption = Number.parseFloat(req.query.consumption);
  if (isNaN(consumption) || consumption <= 0) {
    return res.status(400).json({ error: "Invalid consumption value" });
  }
  try {
    const eligibleSuppliers = await Supplier.find({ minKWh: { $lte: consumption } });
    res.json(eligibleSuppliers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching suppliers" });
  }
};

const compareSuppliers = async (req, res) => {
  const { supplierIds } = req.body;
  if (!Array.isArray(supplierIds) || supplierIds.length < 2) {
    return res.status(400).json({ error: "Invalid supplier IDs" });
  }
  try {
    const suppliers = await Supplier.find({ _id: { $in: supplierIds } });
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: "Error comparing suppliers" });
  }
};

const addSupplier = async (req, res) => {
  try {
    const newSupplier = new Supplier(req.body);
    console.log(req.body);
    await newSupplier.save();
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(400).json({ error: "Error adding supplier" });
  }
};

module.exports = {
  getEligibleSuppliers,
  compareSuppliers,
  addSupplier,
};
