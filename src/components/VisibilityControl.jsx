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
         <label>Show Tasks Done</label>
         <input
            type="checkbox"
            onChange={(e) =>
               setShowCompleted(e.target.checked)
            }
            checked={isChecked}
         />
         <br />
         <button
            className="btn-clear"
            onClick={handleDelete}>
            Clear
         </button>
      </div>
   );
};

export default VisibilityControl;
