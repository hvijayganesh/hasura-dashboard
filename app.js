'use strict'

const Hapi = require('hapi')
const db = require('./database').db;
const Config = require('./config');
const EmployeeRoutes = require('./routes/employee-routes');
const Inert = require('inert');

class AppLoader {
  constructor() {
    this.appData = {};
  }

  createHapiServer() {
    return new Hapi.Server({
      port: process.env.PORT || Config.SERVER.port,
      host: process.env.HOST ||  '0.0.0.0',
      routes: {
        cors: true
      }
    })
  }

  initDb() {
    this.appData.pgp = db(process.env.DATABASE_URL || Config.DATABASE_URL);
  }

  registerRoutes(server) {
    const me = this;
    let routes = new EmployeeRoutes(me.appData);
    routes.register(server);
  }

  async bootUpApp() {
    const me = this;
    try {
      me.initDb();
      const server = me.createHapiServer();
      await server.register(Inert);
      me.registerRoutes(server);
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = AppLoader;