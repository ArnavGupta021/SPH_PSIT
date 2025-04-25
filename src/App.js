import './App.css';
import HomeComponent from './component/home/home';
import Login from './component/auth/login';
import Signup from './component/auth/signup';
import Dashboard from './component/dashboard/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
