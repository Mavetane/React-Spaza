const User = require("../models/usersModel");
const { comparePassword } = require('../security/passwordGenerator')
const { createToken } = require("../security/tokenGenerator")

const signIn = (app) => {
  app.post('/users/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) {
        const isThere = await comparePassword(password, email);
        const token = await createToken(user.id, user.email);
        if (isThere) {
          return res.json({ token });
        }
        if (!isThere) {
          return res.json({ error: "password or email exists" });
        }
      } else {
        return res.json({ error: "user does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { signIn } 