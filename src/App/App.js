import './App.css';
import ProductList from '../Products/Products';
import Header from '../Header/Header';
import MyForm from '../Fom/Form';
import { useState } from 'react';




function App() {
  const [tasks, setTasks] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (newTask) => {

    if (newTask === "") {
      setErrorMsg("Please enter a task ");
      return;
    }

    if (tasks.find(item => item.task === newTask)) {
      setErrorMsg("Task already exists!");
      return;
    }

    const newTasks = [...tasks]
    newTasks.push({ id: Date.now(), task: newTask })
    setTasks(newTasks) // {id: string/number, task: string}
    setErrorMsg('');
  }

  const handleDelete = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTasks = tasks.filter(item => item.id !== idToDelete)
      setTasks(newTasks)
    }
  }

  const handleEdit = (idToEdit) => {

    const index = tasks.findIndex(task => task.id === idToEdit)
    const newTasks = [...tasks];
    newTasks[index].isEdit = true;
    setTasks(newTasks)
  }

  const handleFormEdit = (idToEdit, newTask) => {
    const index = tasks.findIndex(task => task.id === idToEdit)
    const newTasks = [...tasks];
    newTasks[index].isEdit = false;
    newTasks[index].task = newTask;
    setTasks(newTasks)
  }

  console.log(tasks)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <Header />
        <MyForm handleFormSubmit={handleFormSubmit} errorMsg={errorMsg} />
        {errorMsg !== "" && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <ProductList tasks={tasks} handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleFormEdit={handleFormEdit} />
      </header>
    </div>
  );
}

export default App;
