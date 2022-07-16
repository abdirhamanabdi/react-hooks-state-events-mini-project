import React from "react";

function Task({text, category, removeTask}) {
  const handleCLick = ()=>{ 
    removeTask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleCLick}>X</button>
    </div>
  );
}

export default Task;