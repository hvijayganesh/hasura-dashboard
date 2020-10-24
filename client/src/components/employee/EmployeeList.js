import React, { Component } from "react";
import _ from "lodash";
import Employee from "./Employee";

export class EmployeeList extends Component {

  render() {
    const { employees } = this.props;

    const employeeList = employees.map((employee) => {
      return (
        <Employee key={employee.employeeId} employee={employee}></Employee>
      );
    })

    return (
      <div className="row">
        <h3 className="center-align">List of Employees</h3>
        <hr></hr>
        { !_.isEmpty(employeeList) ? (
          <table>
            <thead>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Country</th>
                <th>Postal Code</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{employeeList}</tbody>
          </table>
        ) : (
          <h5 className="center-align">No employee records found!</h5>
        ) }
      </div>
    );
  }
}

export default EmployeeList;
