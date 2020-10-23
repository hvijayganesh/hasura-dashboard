'use strict'

const Hapi = require('hapi')
const db = require('./database').db;
const Config = require('./config');
const EmployeeRoutes = require('./routes/employee-routes');

class AppLoader {
  constructor() {
    this.appData = {};
  }

  createHapiServer() {
    return new Hapi.Server({
      port: Config.PORT,
      host: Config.HOST
    })
  }

  initDb() {
    this.appData.pgp = db(Config.DATABASE_URL);
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