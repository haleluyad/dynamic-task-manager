function TaskFilter({ filter, setFilter }) {
  return (
    <div>
        <div>
  <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
  All
</button>

 <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
  Completed
</button>

 <button className={filter === "notCompleted" ? "active" : ""} onClick={() => setFilter("notCompleted")}>
  Not Completed
</button>
</div>
    </div>
  );
}

export default TaskFilter;