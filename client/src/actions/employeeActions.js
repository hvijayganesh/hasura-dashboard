import { FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_SUCCESS } from "./types";
import axios  from "axios";
import _ from "lodash";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/employees`);
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