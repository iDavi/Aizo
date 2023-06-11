const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('../configs/config');

class HubServer {
  constructor() {
    this.app = express();
    this.port = config.hub.port;
    this.configureMiddlewares();
    this.configureRoutes();
  }

  configureMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  configureRoutes() {
    this.app.use('/', routes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Hub listening on port ${this.port}!`);
    });
  }
}

module.exports = HubServer;
