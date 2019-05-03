const io = require("socket.io");
const server = io.listen(3000);

var welcome = require("./controller/welcome");
var user = require("./controller/user");

server.on("connection", function(socket) {
  welcome.init(socket);
  socket.on("userData", user.userData);
});
