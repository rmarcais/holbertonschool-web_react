import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const footerText = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
  return (
    <>
      <Notifications />
      <div className="App">
        <Header text='School dashboard' src={logo} alt='Holberton logo'/>
        <div className="App-body">
          <Login text='Login to access the full dashboard' />
        </div>
        <Footer text={footerText} />
      </div>
    </>
    
  );
}

export default App;
