import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
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
    <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button aria-label='Close' onClick={handleClick} style={buttonStyle}>
          <img src={closeIcon} alt='Close icon' width={10}/>
        </button>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
    </div>
  );
}
