const VisibilityControl = ({
   setShowCompleted,
   cleanTasks,
   isChecked,
}) => {
   const handleDelete = () => {
      if (
         window.confirm("¿Are you sure you want to delete?")
      ) {
         cleanTasks();
      }
   };

   return (
      <div>
         <input
            type="checkbox"
            onChange={(e) =>
               setShowCompleted(e.target.checked)
            }
            checked={isChecked}
         />
         <label>Show Tasks Done</label>
         <br />
         <button
            className="btn-clear"
            onClick={handleDelete}>
            Clear Tasks Done
         </button>
      </div>
   );
};

export default VisibilityControl;
