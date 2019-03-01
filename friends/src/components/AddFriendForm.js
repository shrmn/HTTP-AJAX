import React from 'react';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                id: null,
                name: '',
                age: null,
                email: ''
            }
        };
    }


}

export default AddFriendForm;