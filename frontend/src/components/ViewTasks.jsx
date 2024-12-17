import { useState, useEffect } from "react";
import "./viewTasks.css";
import TaskDetails from "./TaskDetails";
import CreateTask from "./createTask";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showCreateTask, setShowCreateTask] = useState(false);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowCreateTask(false);
  };

  const handleEditTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        await fetchTasks();
        setSelectedTask(updatedTask);
      } else {
        console.error("Failed to edit task");
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      setSelectedTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowCreateTask(false);
  };

  return (
    <div className="tasks-container">
      <div className="tasks-list">
        <button
          className="create-task-button"
          onClick={() => setShowCreateTask(true)}
        >
          Create Task
        </button>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <button
                className="task-button"
                onClick={() => handleTaskClick(task)}
              >
                {task.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="task-details-container">
        {showCreateTask ? (
          <CreateTask onCreate={handleCreateTask} />
        ) : (
          selectedTask && (
            <TaskDetails
              task={selectedTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ViewTasks;
