import "./TaskTable.css";
import TaskRow from "./TaskRow";

const TaskTable = ({
   tasks,
   toggleTask,
   showCompleted = false,
   nameTable,
}) => {
   const taskTableRows = (doneValue) => {
      return tasks
         .filter((task) => task.done === doneValue)
         .map((task) => (
            <TaskRow
               task={task}
               key={task.name}
               toggleTask={toggleTask}
            />
         ));
   };

   return (
      <table>
         <thead>
            <tr>
               <th>{nameTable}</th>
            </tr>
         </thead>
         <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
   );
};

export default TaskTable;
