const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('not connected to db')
  } else {
    console.log('everything is working ✅')
  }
})

const app = new express();
const port = process.env.PORT || 5000
const User = require('./models/User')

app.use(express.json())
app.use(cors())

app.get('/hello', (req, res) => {
  res.send({
    hello: 'hello'
  })
})

app.post('/create-user', async (req, res) => {
  const { username, password } = req.body
  const newUser = new User({
    username: username,
    password: password
  })
  const savedUser = await newUser.save()
  res.send({
    savedUser: savedUser
  })
})

app.listen(port, () => {
  console.log(`running on port ${port}`)
})