'use strict'

class Employee {
  constructor(appData) {
    this.tx = appData.pgp;
  }

  async fetch() {
    const me = this;
    try {
      let employees = await me.tx.any(`SELECT * FROM "Employee" order by "EmployeeId" desc`);
      return employees;
    } catch (error) {
      console.error('Error during fetching employees', error);
      throw error;
    }
  }

  async create(data) {
    const me = this;
    try {
      const {
        lastName,
        firstName,
        birthDate,
        address,
        postalCode,
        country,
        email
      } = data;

      let empId = await me.tx.one(
        `INSERT INTO "Employee" ("LastName", "FirstName", "BirthDate", "Address", "PostalCode", "Country", "Email") values ($1, $2, $3, $4, $5, $6, $7) returning *`,
        [lastName, firstName, birthDate, address, postalCode, country, email]
      )
      return empId;
    } catch (error) {
      console.error('Error during employee creation', data);
      throw error;
    }
  }
}

module.exports = Employee;