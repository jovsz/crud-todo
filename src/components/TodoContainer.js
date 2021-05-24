import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';
import axios from 'axios';
import 'react-hook-form';

const TodoContainer = () => {
    const [toDo, setToDo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const setUrl = 'https://todos-go.herokuapp.com/api/todos';

    useEffect(() => {
        axios.get(setUrl)
            .then(response => {
                setLoading(true);
                console.log('status:', response.status);
                console.log('Data' , response.data);
                setToDo(response.data.todos);
            })
            .catch(err =>{
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    },[])

    

    const toDoCard = toDo.map((value) =>  {
        return (
            <TodoItem id={value.id} taskName={value.task} studentName={value.student} isCompleted={value.isCompleted}/>
        )
    })    

    if(loading) {
        return <p>Data is loading...</p>;
    }
    
    if(error || !Array.isArray(toDo)) {
        return <p>There was an error loading your data!</p>;
    }
    return(
        <div>
            <div>To Do App</div>
            <div>
               <CreateTodo /> 
            </div>
            <div>
                <div>{toDoCard}</div>
            </div>
        </div>
    );
}

export default TodoContainer;