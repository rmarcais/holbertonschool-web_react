import React from 'react';
import PropTypes from 'prop-types'
import logo from '../assets/holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App(props) {
  const footerText = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
  let body;

  if (props.isLoggedIn) {
    body = <CourseList />;
  } else {
    body = <Login text='Login to access the full dashboard' />
  }
  return (
    <>
      <Notifications />
      <div className="App">
        <Header text='School dashboard' src={logo} alt='Holberton logo'/>
        <div className="App-body">
          {body}
        </div>
        <Footer text={footerText} />
      </div>
    </>
    
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
