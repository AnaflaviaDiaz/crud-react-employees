export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee
});


export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee
});

export const removeEmployee = (employee) => ({
  type: REMOVE_EMPLOYEE,
  payload: employee
});