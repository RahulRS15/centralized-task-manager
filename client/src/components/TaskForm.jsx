import { useState, useEffect } from "react";

const TaskForm = ({ onAdd, editingTask, onUpdate }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) setTitle(editingTask.title);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onUpdate({ ...editingTask, title });
    } else {
      onAdd({ title, completed: false });
    }
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        className="flex-1 p-3 bg-white bg-opacity-20 text-white placeholder-white focus:outline-none rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all"
      >
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;
