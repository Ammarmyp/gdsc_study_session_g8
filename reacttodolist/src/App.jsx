import React from 'react';
import TodoList from './components/todo';
import Form from './components/Form';
import './App.css';
import Todolist from './components/Todolist';
import {useState} from 'react';

const App = () => {
  /*
  // const [notes, setNotes] = useState {[]}
  const [showForm, setShowForm] = useState {false}
  
  
  */
  return (
    <div className='App'>
      {/* <TodoList/> */}
      <Form />

      {/* <Todolist></Todolist> */}

    </div>
  );
};

export default App;