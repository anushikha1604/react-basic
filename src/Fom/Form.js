import './Form.css';
import { useState } from 'react';

export default function MyForm({ handleFormSubmit, value = '' }) {
    const [localTask, setLocalTask] = useState(value);


    const handleChange = (event) => {
        setLocalTask(event.target.value); // asynchronous update of the state
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(localTask);
        setLocalTask(''); // Clear the input field after submission
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="Input" type="text"
                placeholder="Enter a new task..." name="taskInput"
                value={localTask}
                onChange={handleChange} />
            {value ?
                <button className='Button' type="submit">Edit Task</button> :
                <button className="Button" type="submit" disabled={localTask === ""}>Add Task</button>}
        </form>
    );
}