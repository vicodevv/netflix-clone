import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch"
import "./app.scss"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/watch" element={<Watch />}>
          </Route>
        </Routes>
        </Router>
  );
};

export default App;