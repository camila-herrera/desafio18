import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Narvar from './components/Narvar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleShowRegister = () => {
    setCurrentView('register');
  };

  const handleShowHome = () => {
    setCurrentView('home');
  };

  const handleShowLogin = () => {
    setCurrentView('login');
  };

return (
<div>
  <Narvar onRegisterClick={handleShowRegister} onHomeClick={handleShowHome} onLoginClick={handleShowLogin}/>
  {currentView === 'home' && <Home/>}
  {currentView === 'register' && <Register/>}
  {currentView === 'login' && <Login/>}
  <Footer/>
</div>
);
}
export default App;