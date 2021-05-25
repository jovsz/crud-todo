import React,{useEffect, useState} from 'react';
import TaskCard from './TodoItem';
import TodoForm from './CreateTodo';
import axios from 'axios';

const RequestMethod = () => {
    const[todos, setTodos]=useState([])
    const[id, setId]=useState("")
    const[taskState, setTaskState]=useState()
    const[idToUpdate, setIdToUpdate]=useState()
    const[requestTask, setRequestTask]=useState(null)
    const url = 'https://todos-go.herokuapp.com/api/todos'
  
    //method get
  useEffect(() =>{
    axios.get(url)
      .then(response =>{
        setTodos(response.data.todos);
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  const view = todos.map((value) => {
    return(
      <TaskCard
        key={value.id}
        taskName={value.task} 
        studentName={value.student} 
        idTask={value.id} 
        deleteId={setId} 
        status={value.isCompleted}
        statusMessenger={setTaskState}
        updateId={setIdToUpdate}
      />
    )
  })

  //post method
    useEffect(() =>{
      if(requestTask){
        axios.post(url,requestTask)
          .then(response =>{
            alert('Task added')
            window.location.reload(true);
          })
          .catch(err =>{
            alert('There is an error adding the new task' + err.message)
        })
      }
    },[requestTask])
  
    //method delete
    useEffect(() =>{
      if(id){
        axios.delete(`${url}/${id}`)
        .then(response =>{
          alert('The task as been deleted')
          window.location.reload(true);
        })
        .catch(err =>{
          alert('there is error deleting that task' + err.message)
        })
      }
    },[id])
   
    //method put
    useEffect(() =>{
      if(idToUpdate){
        axios.put(`${url}/${idToUpdate}`,taskState)
          .then(response =>{
          })
          .catch(err =>{
            alert('There is error updating the task: ' + err.message);
        })
      }
    },[idToUpdate, taskState])

   return(
      <div className="main-app">
        <div className='title d-flex d-flex justify-content-center'>
          <h1>To Do list</h1>
        </div>
        <div className='add-container'>
          <TodoForm messenger={setRequestTask} />
        </div>
        <div className='tasks-container d-flex d-flex justify-content-center'>{view}</div>
      </div>
  )
}

export default RequestMethod;
