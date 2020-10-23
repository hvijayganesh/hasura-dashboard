'use strict'

const Employee = require('../models/employee');

class EmployeeController {
  constructor(appData) {
    this.appData = appData;
    this.employee = new Employee(appData);
  }

  list = async (req, h) => {
    try {
      let employees = await this.employee.fetch();
      return h.response(employees).code(200)
    } catch (error) {
      throw error;
    }
  }

  create = async (req, h) => {
    try {
      let newEmployee = await this.employee.create(req.payload);
      return h.response(newEmployee).code(201)
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployeeController;