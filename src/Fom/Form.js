import './Form.css';
import { useEffect, useRef, useState } from 'react';

export default function MyForm({ handleFormSubmit, value = '', errorMsg }) {
  const [localTask, setLocalTask] = useState(value);
  const inputRef = useRef(null);


  const handleChange = (event) => {
    setLocalTask(event.target.value); // asynchronous update of the state
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(localTask);
    setLocalTask(''); // Clear the input field after submission
  }

  useEffect(() => {
    console.log('useEffect Form component mounted');
    inputRef.current.focus();
  }, [])

  useEffect(() => {
    console.log('useEffect: on monting and update', localTask);
  }, [localTask])

  console.log("JSX localTask", localTask)

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input ref={inputRef} className="Input" type="text"
        style={errorMsg ? { border: '5px solid red' } : {}}
        placeholder="Enter a new task..." name="taskInput"
        value={localTask}
        onChange={handleChange} />
      {value ?
        <button className='Button' type="submit">Edit Task</button> :
        <button className="Button" type="submit" disabled={localTask === ""}>Add Task</button>}
    </form>
  );
}