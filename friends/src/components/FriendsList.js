import React from 'react';
import Friend from './Friend';
import Form from './Form';

const FriendsList = ({ friends }) => {
    
    return (
        <div>
            <h1>Friends List</h1>
            <Form />
            {friends.map(friend => (<Friend
            name={friend.name}
            age={friend.age}
            email={friend.email}
            />))}
        </div>
    )
}

export default FriendsList;