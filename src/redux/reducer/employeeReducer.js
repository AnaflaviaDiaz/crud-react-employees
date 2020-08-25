import { ADD_EMPLOYEE, EDIT_EMPLOYEE, REMOVE_EMPLOYEE } from './../actions/employeeActions'

const initialState = {
  employees: []
  // todos: JSON.parse(localStorage.getItem("todos")) || []
}

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [ action.payload, ...state.employees ] };
    case REMOVE_EMPLOYEE:
      return { ...state, employees: state.employees.filter((employee) => employee.id !== action.payload.id ) };
    case EDIT_EMPLOYEE:
      return {...state, employees: state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          return {...action.payload, isEditable: !action.payload.isEditable }
        }
        return employee;
      } )};
    default:
      return state;
  }
};
