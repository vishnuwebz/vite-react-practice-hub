import Header from "./components/Header";
import Home from "./components/Home";
import ProdutsPage from "./components/ProductsPage";
import TodosPage from "./components/TodosPage";
import PostsPage from "./components/PostsPage";
import About from "./components/About";
import "./App.css";


const appTagline = "Learn React concepts with one practice project";

function App() {
  const currentYear = new Date().getFullYear();
  const username = "Vishnu";

  return (
    <div className="app-root">
      <div className="container">
        <Header />

      <main className="app-main">
        <p className="app-intro">
          Welcome, <strong>{username}</strong>! It is {currentYear}.
        </p>

        <div className="vstack gap3">

          <Home />
          <ProdutsPage />
          <TodosPage />
          <PostsPage />
          <About />
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;