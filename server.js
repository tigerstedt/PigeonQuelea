const express = require('express');
const bodyParser = require('body-parser');
const db = require("./modules/datahandler");
const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));
server.use(bodyParser.json());

server.post("/newUser", async function (req, res) {
 console.log(req.body.user);
 console.log(req.body.pass);
 let result = await db.newuser(req.body.user, req.body.pass);
});

server.listen(server.get('port'), function () {
  console.log('server running', server.get('port'));
});