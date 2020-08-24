const usersModel = require('../models/usersModel');
const express = require('express');
const router = express.Router();
const { hashPassword } = require('../security/passwordGenerator');
const { createToken } = require('../security/tokenGenerator')

const users = (router) => {
  router.post('/users/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
      const hashedPassword = await hashPassword(password)
      var newUser = new usersModel({ email, hashedPassword }).save()
      const token = await createToken(newUser.id, newUser.email);
      res.json({ token })
    } catch (e) {
      console.log(e)
      res.send(500).json(err)
    }

  })

}

module.exports = { users };