import React , { useState, useEffect } from 'react';
import { useForm }  from 'react-hook-form';

const CreateTodo = ({update}) => {
    const [newObject, setNewObject] = useState(null);
    const {register, handleSubmit, error} = useForm();

    const onSubmit = data => {
        console.log(data);

        update({
            student:data.student,
            task:data.task
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Student' name='student' ref={...register({required:true})} />
                {error.student && <div>please fill in the name field</div>}
                <input placeholde='Task' name='task' ref={...register({required:true})} />
                {error.task && <div>Please fill in the Task field</div>}
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateTodo;