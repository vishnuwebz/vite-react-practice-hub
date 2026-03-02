import { useState } from "react";
import StatCard from "./StatCard";

function Home() {
  const [typedName, setTypedName] = useState("");
  const [visitCount, setVisitCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleWelcomeClick() {
    setVisitCount((prev) => prev + 1);
    alert("You clicked the welcome button!");
  }

  function handleNameChange(event) {
    const value = event.target.value;
    setTypedName(value);
  }

  function handleReset() {
    setVisitCount(0);
    setTypedName("");
  }

  function handleAuthToggle() {
    setIsLoggedIn((prev) => !prev);
  }

  const totalProducts = 3;
  const totalTodos = 0;
  const totalPosts = 0;

  return (
    <section className="page page-home">
      <h2 className="h4 mb-2">Home</h2>

      {/* Conditional greeting */}
      <p className="mb-1">
        {isLoggedIn ? (
          <>
            Welcome back, <strong>{typedName || "Vishnu"}</strong>!
          </>
        ) : (
          <>You are currently browsing as a guest.</>
        )}
      </p>

      <p className="text-secondary mb-3">
        {isLoggedIn
          ? "You have access to your dashboard stats below."
          : "Log in to personalize your dashboard experience."}
      </p>

      <div className="mb-3 d-flex align-items-center gap-2">
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          onClick={handleAuthToggle}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <span className="badge bg-secondary">
          Status: {isLoggedIn ? "Logged in" : "Guest"}
        </span>
      </div>

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

      <div className="mb-2">
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

      {/* Logical AND conditional render */}
      {typedName && (
        <p className="mt-2">
          Live preview: <strong>{typedName}</strong>
        </p>
      )}

      <hr className="my-4" />

      {/* Only show stats when logged in */}
      {isLoggedIn && (
        <>
          <div className="mb-2">
            <h3 className="h6 text-uppercase text-secondary">Dashboard stats</h3>
          </div>

          <div className="d-grid gap-2">
            <StatCard
              label="Total products"
              value={totalProducts}
              accent="info"
            />
            <StatCard label="Total todos" value={totalTodos} accent="success" />
            <StatCard
              label="Total API posts"
              value={totalPosts}
              accent="warning"
            />
          </div>
        </>
      )}

      {!isLoggedIn && (
        <p className="text-secondary mt-3">
          Login to view your dashboard stats.
        </p>
      )}
    </section>
  );
}

export default Home;
