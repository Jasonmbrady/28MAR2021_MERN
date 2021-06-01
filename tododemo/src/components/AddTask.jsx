import React, {useState} from 'react';

const AddTask = ({taskList, setTaskList}) => {
    const [task, setTask] = useState("")
    const formHandler = e => {
        e.preventDefault();
        const newTask = {text: task, isCompleted: false}
        setTaskList([...taskList, newTask])
        setTask("")
    }
    return(
        <form onSubmit={formHandler}>
            <input type="text" value={task} onChange={ e => setTask(e.target.value)}/>
            <button>Add Task</button>
        </form>
    )
}

export default AddTask;