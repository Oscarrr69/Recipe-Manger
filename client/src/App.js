import './App.css';
import Recipes from './pages/Home';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Favorites from './pages/Favorites';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Recipes/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
