import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const toggleTask = (id) => {
  setTasks(tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }

    return task;
  }));
};
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
const clearCompleted = () => {
  setTasks(tasks.filter((task) => !task.completed));
};
const addTask = () => {
  if (input.trim() === "") {
    return;
  }


  const newTask = {
    id: Date.now(),
    text: input,
    completed: false
  };

  setTasks([...tasks, newTask]);
  setInput("");
};
const totalTasks = tasks.length;
const completedTasks = tasks.filter((task) => task.completed).length;
return (
  <div>
     <h1>Dynamic Task Manager</h1>

    <TaskForm
      input={input}
      setInput={setInput}
      onAdd={addTask}
    />
    <p>Total Tasks: {totalTasks}</p>
<p>Completed Tasks: {completedTasks}</p>
    <TaskFilter
  filter={filter}
  setFilter={setFilter}
/>
<button onClick={clearCompleted}>
  Clear Completed
</button>

    <TaskList
      tasks={tasks}
       filter={filter}
      onToggle={toggleTask}
      onDelete={deleteTask}
    />
    </div>
);
}
export default App;
