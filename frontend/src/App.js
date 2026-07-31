import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './Manchester United Logo.png'; // Import the Manchester United logo

const API_URL = 'http://localhost:5000/tasks';

// Main App component for the Task Manager application
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  // Load all tasks from the backend
  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        console.error('Unexpected response format:', data);
        setTasks([]);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Send new task to the backend, then clear the form and refresh the list
  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!taskName || !description) return;

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName, description, priority })
      });

      setTaskName('');
      setDescription('');
      setPriority('Medium');

      fetchTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // Delete a task, then refresh the list
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Manchester United Logo" className="logo" />
      <h1>Manchester United Task Manager</h1>

      <form className="task-form" onSubmit={handleAddTask}>
        <div className="form-row">
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g. Attend training session"
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Training session at 5 PM"
            rows={2}
          />
        </div>

        <button type="submit" className="add-btn">Add Task</button>
      </form>

      {/* // Display the list of tasks */}
      <h2>Tasks</h2>
      <div className="task-list">
        {tasks.length === 0 && <p>No tasks yet.</p>}

        {tasks.map((task) => (
          <div key={task._id} className={`task-card priority-${task.priority.toLowerCase()}`}>
            <div className="task-info">
              <h3>{task.taskName}</h3>
              <p>{task.description}</p>
              <span className="priority-badge">{task.priority}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(task._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;