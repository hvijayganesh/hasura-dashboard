'use strict'

const EmployeeController = require('../controllers/employee');
const Path = require('path');

class EmployeeRoutes {
  constructor(appData) {
    this.employeeController = new EmployeeController(appData);
  }

  getEmployeeRoutes = () => {
    return [
      {
        method: 'GET',
        path: '/employees',
        handler: this.employeeController.list
      },
      {
        method: 'POST',
        path: '/employee/',
        handler: this.employeeController.create
      },
      {
        method: 'GET',
        path: '/{path*}',
        handler: {
          directory: {
            path: Path.join(__dirname, process.env.CLIENT_BUILD_PATH || '../../client/build'),
            listing: false,
            index: true
          }
        }
      }
    ]
  }

  register(server) {
    server.route(this.getEmployeeRoutes());
  }
}

module.exports = EmployeeRoutes;