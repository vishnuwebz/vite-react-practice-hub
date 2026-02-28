import Header from "./components/Header";

const appTagline = "Learn React concepts with one practice project";

function App() {
  const currentYear = new Date().getFullYear();
  const username = "Vishnu";

  return (
    <div className="app-root">
      <Header />


      <main className="app-main">
        <p>
          Welcome, <strong>{username}</strong>! It is {currentYear}.
        </p>
        <p>{appTagline}</p>
      </main>
    </div>
  );
}

export default App;