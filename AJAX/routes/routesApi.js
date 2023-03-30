const express = require('express');
const router = express.Router();
const path = require('path');

// Set-Up Routes
router
  .route('/')
  .get(async (req, res) => {
    //code here for GET to show static HTML flie

    res.sendFile(path.join(__dirname, '../static/webpage.html'));

  });

  module.exports = router;


