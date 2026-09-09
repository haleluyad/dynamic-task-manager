import TaskItem from "./TaskItem";
function TaskList({ tasks,filter, onToggle, onDelete }) {
    let filteredTasks = tasks;
    if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
}

if (filter === "notCompleted") {
    filteredTasks = tasks.filter((task) => !task.completed);
}
if (tasks.length === 0) {
  return <p>No tasks yet. Add your first task!</p>;
}

if (filteredTasks.length === 0) {
  return <p>No tasks match this filter.</p>;
}
    return (
        <div>
      {
        filteredTasks.map((task) => {
            return <TaskItem key={task.id} task={task} onToggle={onToggle}
    onDelete={onDelete} />;
        })}
        </div>
    );
}
export default TaskList;