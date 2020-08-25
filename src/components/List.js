import React from 'react';
import RemoveImage from './../assets/quit.svg';
import EditImage from './../assets/edit.png';
import CheckImage from './../assets/tick.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeEmployee, editEmployee } from '../redux/actions/employeeActions';

const List = () => {

  const { employees } = useSelector(state => state.employee);
  const dispatch = useDispatch();

  const onRemove = (employee) => {
    dispatch(removeEmployee(employee));
  };

  const onEdit = (employee) => {
    dispatch(editEmployee(employee));
  };

  return (
    <div className="px-1">
      <table>
        <thead>
          <tr>
            <th>Nombre y apellido</th> 
            <th>Email</th> 
            <th>Celular</th> 
            <th>Editar</th> 
            <th>Eliminar</th> 
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td> 
              <td>{employee.email}</td> 
              <td>{employee.phone}</td> 
              <td>
                <button className="List-button-img" onClick={() => onEdit(employee)}>
                  {employee.isEditable ? (
                    <img className="List-actions-icons" alt="check" src={CheckImage}></img>
                  ): (
                    <img className="List-actions-icons" alt="edit" src={EditImage}></img>
                  )}
                </button>
              </td> 
              <td>
                <button className="List-button-img" onClick={() => onRemove(employee)}>
                  <img className="List-actions-icons" alt="remove" src={RemoveImage}></img>
                </button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
