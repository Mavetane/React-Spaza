const usersModel = require('../models/usersModel');
const express = require('express');
const router = express.Router();

const users = (router) => {
  router.post('/users/signup', async (req, res) => {
    const { email, password } = req.body;
    var compareEmail = await usersModel.find()
    for (var i in compareEmail) {
      if (email.toUpperCase().trim() == compareEmail[i].email.toUpperCase().trim()) {
        return res.status(500).json("email already exist")
      }
    }
    if (email == "") {
      return res.status(400).json("Input field is required")
    }
    if (password == "") {
      return res.status(500).json("Please include your password")
    }
    var newUser = new usersModel({ email, password })
    try {
      const dbResult = await newUser.save();
      res.sendStatus(201).json(dbResult)
    } catch (e) {
      console.log(e)
    }

  })

}

module.exports = { users };