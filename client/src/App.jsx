import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import "./app.scss"; 
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";

const App = () => {
  const user = true ;
  return (
    <Router>
    <Routes>
        <Route exact path="/login" element={ !user ? <Login /> :  < Navigate to = "/ "/>}></Route>
        <Route exact path="/register" element={ !user ? <Register /> :  < Navigate to = "/"/>}></Route>
        <Route exact path="/" element={ user ? <Home /> :  < Navigate to = "/register"/>}></Route>
      {user && (
        <>
        <Route path="/movies" element={<Home />}></Route>
        <Route path="/series" element={<Home />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        </>
      )}
    </Routes>
    </Router>
  );
};

export default App;