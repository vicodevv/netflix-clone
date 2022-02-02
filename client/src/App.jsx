import  Home  from "./pages/home/Home";
import "./app.scss"; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />}>
    <Home />
  </Route> 
  <Route path="/movies" element={<Home />}>
    <Home />
  </Route>
      </Routes>
    </Router>
  
  );
};

export default App;