import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

function Notifications(props) {
  function handleClick() {
    console.log('Close button has been clicked');
  }
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    position: "absolute",
    top: 2,
    right: 2
  }
  return (
    <>
      <div className='menuItem'>
        Your notifications
      </div>
      {props.displayDrawer ? (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button aria-label='Close' onClick={handleClick} style={buttonStyle}>
            <img src={closeIcon} alt='Close icon' width={10}/>
          </button>
          <ul>
            <NotificationItem type='default' value='New course available'/>
            <NotificationItem type='urgent'value='New resume available'/>
            <NotificationItem type='urgent' html={{__html: getLatestNotification()}}/>
          </ul>
        </div>
      ) : null}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
