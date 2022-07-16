import React, { useState } from "react";
import Task from "./Task";
  function TaskList({tasks, removeTask}) {
 

  const taskList = tasks.map((task)=>{
    return <Task key={task.text} text={task.text} category={task.category} removeTask={removeTask}/>
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}

    </div>
  );
}

export default TaskList;