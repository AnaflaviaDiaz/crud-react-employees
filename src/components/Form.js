import React from 'react';

const Form = ({onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex my-2 Form-items">
          <label>Nombre y Apellido</label>
          <input className="Form-input" name="name" placeholder="nombre y apellido" type="text" />
        </div>
        <div className="d-flex my-2 Form-items">
          <label>Email</label>
          <input className="Form-input" name="email" placeholder="email" type="email" />
        </div>
        <div className="d-flex my-2 Form-items">
          <label>Celular</label>
          <input className="Form-input" name="cel" placeholder="celular" type="tel" />
        </div>
        <div style={{margin: '2rem 0'}}>
          <button className="Form-btn">Aceptar</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
