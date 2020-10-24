import React, { Component } from 'react'
import { EmployeeList } from '../employee/EmployeeList'
import { connect } from "react-redux";
import { fetchEmployees } from "../../actions/employeeActions";

export class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees } = this.props;

    return (
      <div>
        <div className="container">
          <EmployeeList employees={employees}></EmployeeList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => { dispatch(fetchEmployees()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

