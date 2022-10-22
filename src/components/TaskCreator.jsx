import { useState } from "react";
import "./TaskCreator.css";

export const TaskCreator = ({ createNewTask }) => {
   const [newTaskName, setNewTaskName] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      createNewTask(newTaskName);
      setNewTaskName("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Enter a new task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
         />
         <button>Save</button>
      </form>
   );
};
