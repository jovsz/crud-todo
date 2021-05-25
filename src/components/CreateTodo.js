import { useForm } from "react-hook-form";



const TodoForm = ({messenger}) =>{
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
        
        messenger({
            student:data.student,
            task:data.task
        });
    }
    return(
        <div className='d-flex justify-content-center'>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name='task' {...register('student', { required: true})} placeholder='Student field' />
                </div>
                <div className="form-group">
                    <input name='student' {...register('task', {required: true})} placeholder='Task field' />
                </div>
                <div>
                    <input className="btn btn-lg btn-primary" type='submit' placeholder='Add'/>
                </div>
            </form>
           
        </div>
    );
}

export default TodoForm;