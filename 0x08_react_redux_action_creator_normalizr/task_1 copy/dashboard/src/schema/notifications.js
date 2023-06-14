import * as JSONData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(JSONData.default, [notification]);

export default function getAllNotificationsByUser(userId) {
    const allContexts = [];

    JSONData.default.forEach((notification) => {
        if (notification.author.id === userId) {
            allContexts.push(notification.context);
        }
    });

    return allContexts;
}

export { normalizedData };
