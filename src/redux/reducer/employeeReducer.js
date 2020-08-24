import { ADD_EMPLOYEE, EDIT_EMPLOYEE, REMOVE_EMPLOYEE } from './../actions/employeeActions'

const initialState = {
  employees: [{
    name: '',
    email: '',
    phone: '',
    id: '',
    editable: false
  }]
  /* todos: [
      { text: 'Agragar nuevo componente',
          id: '123',
          checked: false
      }
  ] */
  // todos: JSON.parse(localStorage.getItem("todos")) || []
}

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           if (action.payload.id === todo.id) {
//             return {
//               ...todo,
//               checked: !todo.checked
//             }
//           }
//           return todo
//         })
//       }
//   }
// }

export const employeeReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [ action.payload, ...state.employees ] };
    case REMOVE_EMPLOYEE:
      return { ...state, employees: state.employees.filter(employee => employee.id !== action.payload.id ) };
    case EDIT_EMPLOYEE:
      return state;
    default:
      return state;
  }
};
