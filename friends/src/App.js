import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {
  // const [friends, setFriends] = useState({ friends: axios.get() })
  constructor() {
    super();
    this.state = {
    friends: [],
    error: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      })
  }

  submitFriend = e => {
    e.preventDefault();
    // console.log("works");
    axios
      .post(this.url, { name: '', age: '', email: '' })
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log("Error: ", err));
};

changeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

  render() {
    return (
      <>
        <FriendsList
        changeHandler={this.changeHandler}
        friends={this.state.friends}
        submitHandler={this.submitHandler}
        />
      </>
    );
  }
}

export default App;

