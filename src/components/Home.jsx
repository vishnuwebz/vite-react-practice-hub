import { useState } from "react";
import StatCard from "./StatCard";

function Home() {
  const [typedName, setTypedName] = useState("");
  const [visitCount, setVisitCount] = useState(0);

  function handleWelcomeClick() {
    setVisitCount((prev) => prev + 1);
    // alert("You clicked the welcome button!");
  }

  function handleNameChange(event) {
    const value = event.target.value;
    setTypedName(value);
  }

  function handleReset() {
    setVisitCount(0);
    setTypedName("");
  }

  // Temporary placeholder stats (will hook real values later)
  const totalProducts = 3;
  const totalTodos = 0;
  const totalPosts = 0;

  return (
    <section className="page page-home">
      <h2 className="h4 mb-2">Home</h2>
      <p className="mb-2">Welcome to React Practice Hub.</p>
      <p className="text-secondary mb-3">
        Here you will see quick stats and shortcuts to other pages.
      </p>

      <div className="mb-3 d-flex align-items-center gap-2">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleWelcomeClick}
        >
          Click to say hello
        </button>

        <span className="badge bg-secondary">
          Clicked {visitCount} time{visitCount === 1 ? "" : "s"}
        </span>

        <button
          type="button"
          className="btn btn-outline-light btn-sm"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Type your name:
        </label>
        <input
          id="nameInput"
          type="text"
          className="form-control form-control-sm"
          placeholder="Start typing..."
          value={typedName}
          onChange={handleNameChange}
        />
      </div>

      {typedName && (
        <p className="mt-2">
          Live preview: <strong>{typedName}</strong>
        </p>
      )}

      <hr className="my-4" />

      <div className="mb-2">
        <h3 className="h6 text-uppercase text-secondary">Dashboard stats</h3>
      </div>

      <div className="d-grid gap-2">
        <StatCard label="Total products" value={totalProducts} accent="info" />
        <StatCard label="Total todos" value={totalTodos} accent="success" />
        <StatCard label="Total API posts" value={totalPosts} accent="warning" />
      </div>
    </section>
  );
}

export default Home;
