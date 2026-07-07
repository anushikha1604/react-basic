import MyForm from '../Fom/Form';
import './Products.css';
import React, { useState } from 'react';


export default function ProductList({ tasks, handleDelete, handleEdit, handleFormEdit }) {

    const handleFormSubmit = (id, newTask) => {
        handleFormEdit(id, newTask)
    }

    const listItems = tasks.map(item =>
        <li key={item.id} className="list-item">
            {item.isEdit ? <MyForm
                value={item.task}
                handleFormSubmit={(newTask) => handleFormSubmit(item.id, newTask)}
            />
                :
                <>
                    {item.task}
                    <button className="delete-button"
                        onClick={() => handleDelete(item.id)}>Delete</button>
                    <button className="edit-button"
                        onClick={() => handleEdit(item.id)}>Edit</button>
                </>}
        </li>
    );


    return (
        <>
            {tasks.length ? <h2 >Task List</h2> : <></>}
            <ul className="list">{listItems}</ul>
        </>
    );
}
