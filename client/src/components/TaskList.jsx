import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => (
  <div className="space-y-4">
    {tasks.length === 0 ? (
      <p className="text-center text-gray-300">No tasks available.</p>
    ) : (
      tasks.map((task) => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
      ))
    )}
  </div>
);

export default TaskList;
