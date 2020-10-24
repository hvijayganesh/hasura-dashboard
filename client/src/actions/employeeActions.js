import { FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_SUCCESS, CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_SUCCESS } from "./types";
import axios  from "axios";
import _ from "lodash";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/employees`);
    const employees = _.get(res, 'data', [])
    dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      employees
    })
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEES_FAILURE
    })
  }
};

export const createEmployee = (empData) => async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:5000/employee/`, empData);
    const employee = _.get(res, 'data', {})
    dispatch({
      type: CREATE_EMPLOYEE_SUCCESS,
      employee
    })
  } catch (error) {
    dispatch({
      type: CREATE_EMPLOYEE_FAILURE
    })
  }
}