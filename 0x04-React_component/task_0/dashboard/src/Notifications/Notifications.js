import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

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
  let content;

  if (props.listNotifications.length === 0) content = <p>No new notification for now</p>;
  else {
    content = props.listNotifications.map((notification) =>
    <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html}/>);
  }
  return (
    <>
      <div className='menuItem'>
        Your notifications
      </div>
      {props.displayDrawer ? (
        <div className='Notifications'>
          {props.listNotifications.length === 0 ? content : (<p>Here is the list of notifications</p>)}
          <button aria-label='Close' onClick={handleClick} style={buttonStyle}>
            <img src={closeIcon} alt='Close icon' width={10}/>
          </button>
          {props.listNotifications.length === 0 ? null : (<ul>{content}</ul>)}
        </div>
      ) : null}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
