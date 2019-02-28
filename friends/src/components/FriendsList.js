import React from 'react';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

const FriendsList = ({ friends }) => {
    
    return (
        <div>
            <h1>Friends List</h1>
            <AddFriendForm />
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