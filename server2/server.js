const express = require("express");
const app = express();
const logger = require("./configs/logger.config");
const { SERVER } = require("./constants/env.constant");
const http = require("http");
const { init } = require("./io/socket");

/** http create server */
const server = http.createServer(app);

init(server);
server.listen(8081, () => {
  console.log(`Server is running on port ${8081}`);
});
