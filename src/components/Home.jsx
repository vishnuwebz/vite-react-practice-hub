import { useState } from "react";

function Home() {
  const [typedName, setTypedName] = useState("");
// const [value, setValue] = usestate(); It returns [value, setValue].
  const [visitCount, setVisitCount] = useState(0);

  function handleWelcomeClick() {
    setVisitCount((prev) => prev + 1);

    console.log("Welcome button clicked, visitCount now:", visitCount + 1);
    // alert("You clicked the welcome button!");
  }

  function handleNameChange(event) {
    const value = event.target.value; // read from input
    setTypedName(value);
    console.log("User typed:", value);
  }

  function handleReset() {
    setVisitCount(0);
    setTypedName("");
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

        <span>Clicked {visitCount} time{visitCount === 1 ? "" : "s"}</span>

        <button type="button" className="btn btn-outline-light btn-sm" onClick={handleReset}>Reset</button>
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

      {typedName && (
        <p className="mt-2">
          Live preview: <strong>{typedName}</strong>
        </p>
      )}
    </section>
  );
}

export default Home;
