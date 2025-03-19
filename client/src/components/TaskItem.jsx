const TaskItem = ({ task, onDelete, onToggle, onEdit }) => (
    <div className="flex items-center justify-between bg-white bg-opacity-20 p-4 rounded-lg shadow-lg transition-transform hover:scale-105">
      <div
        className={`flex-1 cursor-pointer text-lg ${task.completed ? "line-through text-gray-300" : "text-white"}`}
        onClick={() => onToggle(task._id)}
      >
        {task.title}
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
  
  export default TaskItem;
  