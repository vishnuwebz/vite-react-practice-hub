import { useState } from "react";

function Home() {
  const [typedName, setTypedName] = useState("");

  function handleWelcomeClick() {
    console.log("Welcome button clicked");
    alert("You clicked the welcome button!");
  }

  function handleNameChange(event) {
    const value = event.target.value; // read from input
    setTypedName(value);
    console.log("User typed:", value);
  }

  return (
    <section className="page page-home">
      <h2 className="h4 mb-2">Home</h2>
      <p className="mb-2">Welcome to React Practice Hub.</p>
      <p className="text-secondary mb-3">
        Here you will see quick stats and shortcuts to other pages.
      </p>

      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary btn-sm me-2"
          onClick={handleWelcomeClick}
        >
          Click to say hello
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
          onChange={handleNameChange}
        />
      </div>

      {typedName && (
        <p className="mt-2">
          Live preview: <strong>{typedName}</strong>
        </p>
      )}
    </section>
  );
}

export default Home;
