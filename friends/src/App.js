import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {  
  constructor() {
    super();
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
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

  changeHandler = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.name === 'age' 
      ? parseInt(target.value)
      : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  submitFriend = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', { 
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
       })
      .then(res => {
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err => this.setState({ error: err }));
};

  render() {
    return (

        <div className='App'>
          <h1>Friends List</h1>
          <AddFriendForm
          changeHandler={this.changeHandler}
          submitFriend={this.submitFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          />
          <FriendsList          
          friends={this.state.friends}
          />
        </div>
    );
  }
}

export default App;

