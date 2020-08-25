import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions/employeeActions';

const Form = () => {
  const [isValidForm, setIsValidForm] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();

    if(!!name && !!email && !! phone) {
      setIsValidForm(true);
      dispatch(addEmployee({ id: new Date().getTime(), name, email, phone }));
      for (let index = 0; index < 3; index++) {
        e.target[index].value = '';
      }
    } else {
      setIsValidForm(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex my-2 Form-items">
          <label>Nombre y Apellido</label>
          <input className="Form-input" name="name" placeholder="nombre y apellido" type="text" required />
        </div>
        <div className="d-flex my-2 Form-items">
          <label>Email</label>
          <input className="Form-input" name="email" placeholder="email" type="email" required />
        </div>
        <div className="d-flex my-2 Form-items">
          <label>Celular</label>
          <input className="Form-input" name="cel" placeholder="celular" type="tel" required />
        </div>
        {!isValidForm && (<h3>Los datos no están completos</h3>)}
        <div style={{margin: '2rem 0'}}>
          <button className="Form-btn">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
