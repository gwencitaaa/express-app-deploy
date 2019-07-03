const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = new express();
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`running on port ${port}`)
})