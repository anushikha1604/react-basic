import './App.css';
import ProductList from '../Products/Products';
import Header from '../Header/Header';
import MyForm from '../Fom/Form';
import { useState } from 'react';



function App() {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (newTask) => {
    if (newTask === "") return;
    if (tasks.find(item => item.task === newTask)) return;
    const newTasks = [...tasks]
    newTasks.push({ id: Date.now(), task: newTask })
    setTasks(newTasks) // {id: string/number, task: string}
  }

  const handleDelete = (idToDelete) => {
    const newTasks = tasks.filter(item => item.id !== idToDelete)
    setTasks(newTasks)
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
        <MyForm handleFormSubmit={handleFormSubmit} />
        <ProductList tasks={tasks} handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleFormEdit={handleFormEdit} />
      </header>
    </div>
  );
}

export default App;
