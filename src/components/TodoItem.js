import React, { useState, useEffect } from 'react';

const TodoItem = ({id,taskName,studentName,isCompleted}) => {
    
    const handleDelete = () =>{
        console.log(id);
    }

    const handleUpdate = () => {
        console.log(id);
    }

    return (
        <div>
            <div>{id}</div>
            <div>{taskName}</div>
            <div>{studentName}</div>
            <div>{isCompleted}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}
export default TodoItem