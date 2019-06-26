import React, {Component} from 'react';
import User from './User';

class Users extends Component {
  state = {
    users: [
      {id: 0, name: 'john', age: 21},
      {id: 1, name: 'judy', age: 24},
      {id: 2, name: 'alex', age: 25}
    ],
    title: 'state and props',
    inputUserNameValue: '',
    inputAgeValue: ''
  };

  ageUp = () => {
    const newState = this.state.users.map(user => user.age += 10);
    this.setState({newState});
  };

  ageDown = () => {
    const newState = this.state.users.map(user => user.age -= 10);
    this.setState({newState});
  };

  addUser = () => {
    const newState = [...this.state.users];
    const index = this.state.users.length + 2;
    let users = {id: index, name: this.state.inputUserNameValue, age: this.state.inputAgeValue};
    newState.push(users);
    this.setState({users: newState});
  };

  changeUsername = (id, event) => {
    const index = this.state.users.findIndex(user => user.id === id);
    const editUser = [...this.state.users];
    if (index || index === 0) {
      editUser[index].name = event.target.value;
      this.setState({editUser});
    }
  };

  updateInputValue = (test, evt) => {
    if (test === 'inputUserNameValue') {
      this.setState({inputUserNameValue: evt.target.value});
    } else {
      this.setState({inputAgeValue: evt.target.value});
    }
  };

  deleteUser = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({users});
  };

  render() {
    return (
      <div>
        <h4>{this.state.title} : </h4>
        <button onClick={this.ageUp}>AGE UP</button>&nbsp;
        <button onClick={this.ageDown}>AGE DOWN</button>
        <br/>
        {
          this.state.users.map((user, index) => {
            return <User key={user.id}
                         delEvent={this.deleteUser.bind(this, index)}
                         age={user.age}
                         changeEvent={this.changeUsername.bind(this, user.id)}
                         name={user.name}/>
          })
        }
        <input type="text" name="user" onChange={this.updateInputValue.bind(this, 'inputUserNameValue')}/>&nbsp;
        <input type="text" name="age" onChange={this.updateInputValue.bind(this, 'inputAgeValue')}/>&nbsp;
        <button onClick={this.addUser}>Click to add user</button>
      </div>

    );
  }
}

export default Users;
