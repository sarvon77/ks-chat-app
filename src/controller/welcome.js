var welcome = {};

welcome.init = socket => {
  socket.emit("welcome", { askName: true });
};

module.exports = welcome;
