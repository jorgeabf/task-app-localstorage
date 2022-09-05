import { useState } from "react";

import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
   const [tasksItems, setTasksItems] = useState([
      { name: "task 1", done: false },
      { name: "task 2", done: false },
      { name: "task 3", done: false },
   ]);

   function createNewTask(taskName) {
      setTasksItems([
         ...tasksItems,
         { name: taskName, done: false },
      ]);
   }

   return (
      <div className="App">
         <TaskCreator createNewTask={createNewTask} />

         <table>
            <thead>
               <tr>
                  <th>Tasks</th>
               </tr>
            </thead>
            <tbody>
               {tasksItems.map((task) => (
                  <tr key={task.name}>
                     <td>{task.name}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default App;

//? Minuto 33 Video Fatz code. React - Aplicación de tareas con useState, useEffect y localStorage
