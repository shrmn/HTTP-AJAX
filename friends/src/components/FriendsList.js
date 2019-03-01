import React from 'react';
import Friend from './Friend';

const FriendsList = ({ changeHandler, friends, submitHandler }) => {
    
    return (
        <div>
            <h1>Friends List</h1>
            {friends.map(friend => (<Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            />))}
        </div>
    )
}

export default FriendsList;