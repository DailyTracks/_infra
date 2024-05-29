const app = require("./app");
const logger = require("./configs/logger.config");
const { SERVER } = require("./constants/env.constant");
const http = require("http");
/** http create server */
const server = http.createServer(app);
server.listen(SERVER.PORT, () => {
  logger.info(`Server is running on port ${SERVER.PORT}`);
});
