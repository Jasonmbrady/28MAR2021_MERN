import React, {useState} from 'react';

const TaskList = ({taskList, setTaskList}) => {
    const checkHandler = e => {
        let updateList = [...taskList]
        let thisTask = taskList[e.target.name];
        console.log(thisTask)
        if (taskList[e.target.name].isCompleted){
            thisTask.isCompleted = false;
        } else {
            thisTask.isCompleted = true;
        }
        updateList[e.target.name] = thisTask;
        setTaskList(updateList);
    }

    const deleteHandler = e =>{
        setTaskList(taskList.filter((task, idx) => {
            return idx != e.target.name;
        }))
    }
    return(
        <div>
            {taskList.map((task, idx) => {
                return(
                    <div key ={idx}>
                        {
                            taskList[idx].isCompleted ?
                            <label style={{textDecoration: "line-through"}}>{task.text}</label> : 
                            <label>{task.text}</label>
                        }
                        <input type="checkbox" checked={taskList[idx].isCompleted} onChange={checkHandler} name={idx}/>
                        <button onClick={deleteHandler} name={idx}>DELETE</button>
                    </div>
                )
            })}

        </div>
    )
}

export default TaskList;