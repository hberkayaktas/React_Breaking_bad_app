import React from "react-dom";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import "./App.css";
//Pages 
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Quotes from "./Pages/Quotes";
function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul className="list">
        <li>
          <Link  to="/">Characters</Link>
        </li>
        <li>
          <Link  to="/quotes">Quotes</Link>
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
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/char/:char_id" element={<Detail />} />
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
