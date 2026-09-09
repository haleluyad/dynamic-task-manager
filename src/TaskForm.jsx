function TaskForm( { input, setInput, onAdd }) {
  return (
   <form onSubmit={(event) => {
  event.preventDefault();
  onAdd();
}}>
  <input
    value={input}
    onChange={(event) => {
      setInput(event.target.value);
    }}
  />

  <button className="add-button" type="submit">
    Add Task
  </button>
</form>
  );
}

export default TaskForm;