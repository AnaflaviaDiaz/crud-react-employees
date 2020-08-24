import React from 'react';
import RemoveImage from './../assets/quit.svg';
import EditImage from './../assets/edit.png';

const List = () => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Nombre y apellido</th> 
          <th>Email</th> 
          <th>Celular</th> 
          <th>Edit</th> 
          <th>Remove</th> 
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Anaflavia Díaz</td> 
          <td>anaflavia@gmail.com</td> 
          <td>99874562</td> 
          <td>
            <button className="List-button-img">
              <img className="List-actions-icons" alt="edit" src={EditImage}></img>
            </button>
          </td> 
          <td>
            <button className="List-button-img">
              <img className="List-actions-icons" alt="remove" src={RemoveImage}></img>
            </button>
          </td> 
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List
