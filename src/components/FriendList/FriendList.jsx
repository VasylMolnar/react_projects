import React from 'react';
import friends from '../../data/friends.json';
import FriendListItem from './FriendListItem';

const FriendList = () => {
  return (
    <section className="friend-list">
      <ul>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </ul>
    </section>
  );
};

export default FriendList;
