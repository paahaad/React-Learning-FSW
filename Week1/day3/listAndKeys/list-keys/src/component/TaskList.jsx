import React from 'react'

function TaskList({id, title, status, handleDelete}) {
  return (
      <div>
          <h2>{title}</h2>
          <button onClick={()=>handleDelete(id)}>Delete</button>
      </div>
    

  );
}

export default TaskList