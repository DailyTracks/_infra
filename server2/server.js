const express = require("express");
const app = express();
const logger = require("./configs/logger.config");
const { SERVER } = require("./constants/env.constant");
const http = require("http");
const { init } = require("./io/socket");

/** http create server */
const server = http.createServer(app);

server.listen(SERVER.PORT, () => {
  init(server);
  console.log(`Server is running on port ${SERVER.PORT}`);
});
