import { CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_SUCCESS, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_SUCCESS } from "../actions/types";

const initState = [];

const employeeReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return action.employees;
    case FETCH_EMPLOYEES_FAILURE:
      return [];
    case CREATE_EMPLOYEE_SUCCESS:
      return [
        ...state,
        action.employee
      ];
    case CREATE_EMPLOYEE_FAILURE:
      return state;
    default:
      return state;
  }
}

export default employeeReducer;