import { useState } from "react";

let nextId = 1;

function TodosPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: nextId++,
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setText("");
  }

  function handleToggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const pendingCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <section className="page page-todos">
      <h2 className="h4 mb-2">Todos</h2>
      <p className="text-secondary mb-3">
        Add tasks, mark them as done, and keep track of your progress.
      </p>

      <form className="row g-2 mb-3" onSubmit={handleAddTodo}>
        <div className="col-12 col-md-8">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="What do you want to do?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-4 d-grid">
          <button
            type="submit"
            className="btn btn-success btn-sm"
            disabled={!text.trim()}
          >
            Add todo
          </button>
        </div>
      </form>

      <div className="d-flex flex-wrap gap-3 align-items-center mb-3">
        <span className="badge bg-primary">
          Pending: {pendingCount}
        </span>
        <span className="badge bg-secondary">
          Completed: {completedCount}
        </span>
        <span className="badge bg-dark">
          Total: {todos.length}
        </span>
      </div>

      {todos.length === 0 ? (
        <p className="text-secondary">No todos yet. Add your first task above.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-secondary"
            >
              <div>
                <div
                  className={
                    "small mb-1 " +
                    (todo.completed ? "text-decoration-line-through text-secondary" : "")
                  }
                >
                  {todo.text}
                </div>
                <span className="badge bg-outline">
                  {todo.completed ? "Done" : "Pending"}
                </span>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={() => handleToggleCompleted(todo.id)}
                >
                  {todo.completed ? "Undo" : "Mark done"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodosPage;
