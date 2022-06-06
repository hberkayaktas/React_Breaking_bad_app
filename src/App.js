import React from "react-dom";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <h1>NAV</h1>
      <ul className="list">
        <li>
          <Link className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">Home</Link>
        </li>
        <li>
          <Link className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about">About</Link>
        </li>
        <li>
          <Link className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/users">Users</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<> Error </>} />
    </Routes>
  </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
     home
    </div>
  );
}
function About() {
  return (
    <div>
     about
    </div>
  );
}
export default App;
