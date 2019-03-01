import React from 'react';

const AddFriendForm = ({ changeHandler, submitFriend, name, age, email }) => {
    return (        
        <form onSubmit={e => submitFriend(e)}>
            <input
            required
            type='text'
            value={name}
            name='name'
            onChange={changeHandler}
            placeholder='name'
            />
            <input
            type='text'
            value={age}
            name='age'
            onChange={changeHandler}
            placeholder='age'
            />
            <input
            type='text'
            value={email}
            name='email'
            onChange={changeHandler}
            placeholder='email'
            />
            <button className='add-friend' type='submit'>Add Friend</button>
        </form>
    );
}

export default AddFriendForm;