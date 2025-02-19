const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');

connectDB();

const server = express();

server.use(cors());
server.use(express.json());

const supplierRoutes = require("./routes/supplierRoute");
server.use("/api/suppliers", supplierRoutes);

server.listen(3333, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3333');
});
