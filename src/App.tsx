import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Career from "./pages/Career";
import Market from './pages/Market';
import Trade from './pages/Trade';
import Earn from './pages/Earn';
import Login from './pages/Login';
import './styles/App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" Component={Home}/>
        <Route path="/market" Component={Market}/>
        <Route path="/trade" Component={Trade} />
        <Route path="/earn" Component={Earn} />
        <Route path="/about" Component={About} />
        <Route path="/career" Component={Career} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
