import React from "react-dom";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";

//Pages 
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
    <nav>
      <h1>Navigation</h1>
      <ul className="list">
        <li>
          <Link  to="/">Home</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
        </li>
        <li>
          <Link  to="/users">Users</Link>
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


function About() {
  return (
    <div>
     about
    </div>
  );
}
export default App;
