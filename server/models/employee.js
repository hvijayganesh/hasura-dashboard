'use strict'

class Employee {
  constructor(appData) {
    this.tx = appData.pgp;
  }

  async fetch() {
    const me = this;
    try {
      let employees = await me.tx.any(`SELECT * FROM "Employee"`);
      return employees;
    } catch (error) {
      console.error('Error during fetching employees', error);
      throw error;
    }
  }
}

module.exports = Employee;