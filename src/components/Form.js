import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, editEmployee } from '../redux/actions/employeeActions';

const initialStateForm = { name: '', email: '', phone: '' };

const Form = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector(state => state.employee);

  const [employeeEditable, setEmployeeEditable] = useState([]);
  const [isValidForm, setIsValidForm] = useState(true);
  const [form, setForm] = useState(initialStateForm);

  useEffect(() => {
    const edit = employees.filter(employee => employee.isEditable);
    if (edit.length > 0) {
      setEmployeeEditable(edit);
      const { name, email, phone } = edit[0];
      setForm({name, email, phone});
    }
  }, [employees]);

  const handleChange = ({target}) => {
   setForm({ ...form, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();

    if(!!name && !!email && !! phone) {
      setIsValidForm(true);

      dispatch(employeeEditable.length > 0 ? 
        editEmployee({ ...employeeEditable[0],...form }) : 
        addEmployee({...form, id: new Date().getTime(), isEditable: false})
      );

      setForm(initialStateForm);
      setEmployeeEditable([]);

    } else {
      setIsValidForm(false);
    }
  };

  const { name, email, phone } = form;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex my-2 Form-items">
          <label htmlFor="name">Nombre y Apellido</label>
          <input className="Form-input" id="name" name="name" value={name} placeholder="Maria Díaz" type="text" required onChange={handleChange} />
        </div>
        <div className="d-flex my-2 Form-items">
          <label htmlFor="email">Email</label>
          <input className="Form-input" id="email" name="email" value={email} placeholder="correo@correo.com" type="email" required onChange={handleChange} />
        </div>
        <div className="d-flex my-2 Form-items">
          <label htmlFor="phone">Celular</label>
          <input className="Form-input" id="phone" name="phone" value={phone} placeholder="999888777" type="tel" required onChange={handleChange} />
        </div>
        {!isValidForm && (<h3>Los datos no están completos</h3>)}
        <div className="my-2">
          <button className="Form-btn">Aceptar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
