import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from './redux/actions/employeeActions';
import Form from './components/Form';
import List from './components/List';

const App = () => {

  const { employees } = useSelector(state => state.employee);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addEmployee({
      id: new Date().getTime(),
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value
    }));

    console.log(employees)
  }

  return (
    <div className="App-container">
      <section className="App-form">
        <h1>Agregar empleado</h1>
        <Form onSubmit={onSubmit} />
      </section>

      <section className="App-list">
        <h1>Lista de empleados</h1>
        <List />
      </section>
    </div>
  );

}

export default App;
