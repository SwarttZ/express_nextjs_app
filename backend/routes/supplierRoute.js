const express = require("express");
const supplierController = require("../controllers/supplierController");

const router = express.Router();

router.get("/eligible", supplierController.getEligibleSuppliers);
router.post("/compare", supplierController.compareSuppliers);
router.post("/add", supplierController.addSupplier);

module.exports = router;
