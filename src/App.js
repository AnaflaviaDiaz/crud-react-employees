import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  return (
    <div className="App-container">
      <section className="App-form">
        <h1>Agregar empleado</h1>
        <Form />
      </section>

      <section className="App-list">
        <h1>Lista de empleados</h1>
        <List />
      </section>
    </div>
  );
}

export default App;
