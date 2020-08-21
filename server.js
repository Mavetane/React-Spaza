const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { users } = require('./routes/signUp')
const port = 5000
const { MongoServer } = require('./config/keys')

const server = express();
server.use(cors());
server.use(bodyParser.json());
users(server);

MongoServer(server);


server.listen(port, () => console.log(`Server Started ${port}`))

