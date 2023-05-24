import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.listNotifications.length < nextProps.listNotifications.length) return true;
    return false;
  }

  render() {
    const buttonStyle = {
      background: 'transparent',
      border: 'none',
      position: "absolute",
      top: 2,
      right: 2
    }
    let content;
  
    if (this.props.listNotifications.length === 0) content = <p>No new notification for now</p>;
    else {
      content = this.props.listNotifications.map((notification) =>
      <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id}/>);
    }
    return (
      <>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)} id="Notifications">
            {this.props.listNotifications.length === 0 ? content : (<p>Here is the list of notifications</p>)}
            <button aria-label='Close' onClick={() => console.log('Close button has been clicked')} style={buttonStyle}>
              <img src={closeIcon} alt='Close icon' width={10}/>
            </button>
            {this.props.listNotifications.length === 0 ? null : (<ul>{content}</ul>)}
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem',
    marginBottom: '.5rem',
  },

  notifications: {
      position: 'absolute',
      right: '1rem',
      padding: '1rem',
      width: '25rem',
      border: 'dashed #e11d3f'
  }
});

export default Notifications;
