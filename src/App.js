import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
