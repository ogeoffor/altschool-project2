import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <div> 
        
          <Link className="space" to ='/'>Home</Link>
          <Link className="space" to ='/about'>About</Link>
          <Link className="space" to ='/contact'>Contact</Link>
          <Link className="space" to ='/users'>Users</Link>

        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="*" element={<h1>404 ERROR</h1>}/>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
