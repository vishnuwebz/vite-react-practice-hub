# React Practice Hub

A small React single-page application (SPA) that combines all core beginner topics into one cohesive project: JSX, components, styling, Bootstrap, events, state, props, conditional rendering, list rendering with keys, hooks (`useState`, `useEffect`), API fetching, React Router, and a Todo mini-project.

**🚀 Live Demo**: https://react-practice-hub-vishnu.netlify.app/

## Features

- **Home dashboard**
  - Login/guest toggle with conditional UI.
  - Interactive welcome button with click counter.
  - Controlled input with live preview of typed name.
  - Dashboard stat cards showing products, todos, and API posts.

- **Products page**
  - Product list rendered from an array using `map` and keys.
  - Editable quantity for each product using controlled inputs.
  - Per-item total and grand total, derived from state.
  - Simple status indicator (in cart / not in cart).

- **Todos page**
  - Add new todos via a form.
  - Mark todos as done/undo and delete them.
  - Pending, completed, and total counts.
  - Uses array state updates with `map` and `filter`.
- **API Posts page**
  - Fetches posts from JSONPlaceholder (`/posts`) using `fetch` and `useEffect`.
  - Loading and error states for API calls.
  - Renders a list of posts with titles and bodies.
- **Routing & layout**
  - React Router for navigation between Home, Products, Todos, API Posts, and About pages.
  - Bootstrap-based layout and utility classes for responsive design.

## Tech stack

- React (with Vite tooling)
- React Router (`react-router-dom`)
- Bootstrap 5 (via npm)
- JavaScript (ES6+), JSX
- HTML5 & CSS3
