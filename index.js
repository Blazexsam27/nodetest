const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// listen for WebSocket connections
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // listen for messages from the client
  ws.on("message", function incoming(message) {
    console.log(`Received message: ${message}`);

    // write the message to stdout
    process.stdout.write(message);
  });
});

// start the server
server.listen(8080, function listening() {
  console.log("Listening on %d", server.address().port);
});
