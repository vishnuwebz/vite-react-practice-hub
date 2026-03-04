import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import TodosPage from "./components/TodosPage";
import PostsPage from "./components/PostsPage";
import About from "./components/About";

import "./App.css";

function App() {
  const currentYear = new Date().getFullYear();
  const username = "Vishnu";

  return (
    <div className="app-root">
      <div className="container">
        <Header />

        {/* Navigation */}
        <nav className="mb-3 border-bottom border-secondary pb-2">
          <ul className="nav nav-pills gap-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/todos"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                API Posts
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="app-main">
          <p className="app-intro">
            Welcome, <strong>{username}</strong>! It is {currentYear}.
          </p>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
