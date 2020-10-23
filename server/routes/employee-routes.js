'use strict'

const EmployeeController = require('../controllers/employee');

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
      }
    ]
  }

  register(server) {
    server.route(this.getEmployeeRoutes());
  }
}

module.exports = EmployeeRoutes;