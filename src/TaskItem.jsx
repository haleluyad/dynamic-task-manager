function TaskItem({ task, onToggle, onDelete  }) {
  return (
    <div className="task-item">
        <input type="checkbox"
        checked={task.completed}
  onChange={() => onToggle(task.id)}
   />
        <p className={task.completed ? "completed" : ""}>{task.text}</p>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
  Delete
</button>
    </div>
  );
}


export default TaskItem;