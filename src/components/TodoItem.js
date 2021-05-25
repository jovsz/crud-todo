import React,{useState, useEffect} from 'react';

const TaskCard = ({taskName,studentName, idTask, deleteId, status, statusMessenger,updateId}) => {

    const [checked, setIsChecked] = useState(status)

    const handleDelete = () => {
        deleteId(idTask);
    }

    const handleUpdate = () => {
        setIsChecked((prevState) => {
            const actualState = !prevState;
            statusMessenger({
                _id: idTask,
                task:taskName,
                student:studentName,
                isCompleted:actualState})//This object we are sending
            updateId(idTask);
            return actualState;
        });
    }

    useEffect(() =>{
        setIsChecked(status)
   },[status])
   
    return(
        <div className='card text-white bg-info mb-3 task-container d-flex card-todo'>
             <div className="card-header">
                <h4 className="">{taskName}</h4>
             </div>
            <div className='card-body'>
                <p className='card-text'>-{studentName}</p>
            <div className='task-options'>
                <button className='btn btn-danger' onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
                <input checked={checked} type="checkbox" onChange={handleUpdate}/>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
