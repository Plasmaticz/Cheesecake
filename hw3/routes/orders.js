// routes/orders.js

var express = require('express');
var router = express.Router();

// Mock data for demonstration purposes
const orders = [
  { topping: 'Cherry', quantity: 2 },
  { topping: 'Chocolate', quantity: 3 },
  { topping: 'Plain', quantity: 6 }
];

// Route that handles GET requests to /orders
router.get('/', function(req, res, next) {
  res.json(orders); // Send the orders array as a JSON response
});

module.exports = router;
