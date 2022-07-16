import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] =useState(TASKS)
  const [selectedCategoty, setSelectedCategory] = useState("All")

  function removeTask(taskToRemove){
    const newList = tasks.filter((todo) => todo.text !==taskToRemove)
    setTask(newList);
  }
  const changeCategories = (category)=>{
    setSelectedCategory(category)
  } 
  const filteredTest =tasks.filter((task)=>task.category === selectedCategoty || selectedCategoty ==="All")

  function onTaskFormSubmit(newTask){
    setTask([...tasks, newTask])
  }
  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeCategories={changeCategories} selectedCategoty ={selectedCategoty}/>
      <NewTaskForm categories={CATEGORIES.filter(cat => cat !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTest} removeTask={removeTask}/>
    </div>
  );
}

export default App;
