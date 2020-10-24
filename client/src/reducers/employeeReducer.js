import { FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_SUCCESS } from "../actions/types";

const initState = [];

const employeeReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return action.employees;
    case FETCH_EMPLOYEES_FAILURE:
      return [];
    default:
      return state;
  }
}

export default employeeReducer;