import { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./Api/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import './index.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (updatedTask) => {
    const task = await updateTask(updatedTask._id, updatedTask);
    setTasks(tasks.map((t) => (t._id === task._id ? task : t)));
    setEditingTask(null);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleEditTask = (task) => setEditingTask(task);

  const handleToggleComplete = async (id) => {
    const task = tasks.find((t) => t._id === id);
    await handleUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
        <Navbar />
        <TaskForm onAdd={handleAddTask} editingTask={editingTask} onUpdate={handleUpdateTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleComplete} onEdit={handleEditTask} />
      </div>
    </div>
  );
};

export default App;
