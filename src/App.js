import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
            <Home/>
      </Router>
    </div>
  );
}

export default App;