const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { users } = require('./routes/signUp')
const { signIn } = require('./routes/signIn')
const port = 5000
const { MongoServer } = require('./config/keys')

const server = express();
server.use(cors());
server.use(bodyParser.json());
users(server);
signIn(server);

MongoServer(server);


server.listen(port, () => console.log(`Server Started ${port}`))

