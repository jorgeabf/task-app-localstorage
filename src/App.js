import { useState, useEffect } from "react";

import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
   const [tasksItems, setTasksItems] = useState([]);
   const [showCompleted, setShowCompleted] =
      useState(false);

   function createNewTask(taskName) {
      if (
         !tasksItems.find((task) => task.name === taskName)
      ) {
         setTasksItems([
            ...tasksItems,
            { name: taskName, done: false },
         ]);
      }
   }

   const toggleTask = (task) => {
      setTasksItems(
         tasksItems.map((item) =>
            item.name === task.name
               ? { ...item, done: !item.done }
               : item
         )
      );
   };

   useEffect(() => {
      let data = localStorage.getItem("tasks");
      if (data) {
         setTasksItems(JSON.parse(data));
      }
   }, []);

   const cleanTasks = () => {
      setTasksItems(
         tasksItems.filter((task) => !task.done)
      );
      setShowCompleted(false);
   };

   useEffect(() => {
      localStorage.setItem(
         "tasks",
         JSON.stringify(tasksItems)
      );
   }, [tasksItems]);

   return (
      <main className="App">
         <TaskCreator createNewTask={createNewTask} />
         <TaskTable
            nameTable="Task to do"
            tasks={tasksItems}
            toggleTask={toggleTask}
         />

         <VisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) =>
               setShowCompleted(checked)
            }
            cleanTasks={cleanTasks}
         />

         {showCompleted && (
            <TaskTable
               nameTable="Task Completed"
               tasks={tasksItems}
               toggleTask={toggleTask}
               showCompleted={showCompleted}
            />
         )}
      </main>
   );
}

export default App;

//? Minuto 33 Video Fatz code. React - Aplicación de tareas con useState, useEffect y localStorage
