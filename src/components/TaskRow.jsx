const TaskRow = ({ task, toggleTask }) => {
   return (
      <tr>
         <td>
            <input
               type="checkbox"
               checked={task.done}
               onChange={() => toggleTask(task)}
            />
            {task.name}
         </td>
      </tr>
   );
};

export default TaskRow;
