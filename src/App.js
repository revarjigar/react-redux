import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Redirect, Prompt} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

import Users from './users/Users';
// import Child from './components/parentToChild/Child';
import Parent from './components/parentToChild/Parent';
import BasicFormRefs from './components/BasicFormRefs';

const Test = (props) => {
  return (
    <div>{props.val}</div>
  )
};

const Test2 = ({match}) => {
  return (
    <div>WELCOME {match.params.username}!!</div>
  )
};

const Test3 = (params) => {
  return (
    <div>HOLA {params.username}!!</div>
  )
};

class App extends Component {

  state = {
    name: '2 WAY BINDING',
    title: 'siblings',
    val: 1,
    isLoggedIn: false
  };

  changeName = () => {
    this.setState({name: 'revar'});
  };

  changeNameFromInput = (event) => {
    this.setState({name: event.target.value});
  };

  changeNameFromBind = (newName) => {
    this.setState({title: newName})
  };

  loggedInHandle = () => {
    this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn
      })
    );
  };

  /*
   componentWillMount() {
   // to change state based on props or just change state
   // window or document events heere
   // runs once
   console.log('componentWillMount');
   }

   componentDidMount() {
   // fn is called when all children have rendered
   // make api calls heere
   // runs once
   console.log('componentDidMount');
   }

   componentWillReceiveProps() {
   // could setState heere
   // no changing props
   console.log('componentWillReceiveProps');
   }

   shouldComponentUpdate(nextProp, nextState) {
   // return true for rerendering else return false
   // if false all child components stops rendering too
   console.log('shouldComponentUpdate');
   }

   componentWillUpdate() {
   // similar to componentWillMount
   // do not setstate heere!!!
   console.log('componentWillUpdate');
   }

   componentDidUpdate(prevProp, prevState) {
   // 3rd party ui elements
   console.log('componentDidUpdate');
   }

   componentWillUnmount() {
   // unsubscribe to things heere
   console.log('componentWillUnmount');
   }
   */
  //
  // submission = () => {
  //   console.log('first name ', this.firstName.value);
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/' exact style={{color: 'grey'}} activeStyle={{color: 'white'}}>Home!</NavLink>
              </li>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/about' exact style={{color: 'grey'}} activeStyle={{color: 'white'}}>About!</NavLink>
              </li>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/users/johnny' exact style={{color: 'grey'}} activeStyle={{color: 'white'}}>Users
                  johnny!</NavLink>
              </li>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/users2' exact style={{color: 'grey'}} activeStyle={{color: 'white'}}>Users2!</NavLink>
              </li>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/users-match/jiggy' style={{color: 'grey'}} exact activeStyle={{color: 'white'}}>Users
                  using match!</NavLink>
              </li>
              <li style={{display: 'inline', margin: '10px'}}>
                <NavLink to='/formrefs' style={{color: 'grey'}} exact activeStyle={{color: 'white'}}>form refs!</NavLink>
              </li>
            </ul>

            <Prompt when={this.state.isLoggedIn} message={(location) => {
              return location.pathname.startsWith('/users/johnny') ? 'loggedin Johnny' : true;
            }}/>
            <button onClick={this.loggedInHandle}>{this.state.isLoggedIn ? 'LOGOUT' : 'LOGIN'}</button>
            <h4>{this.state.name} :</h4>
            <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
            <br/>
            <button onClick={this.changeName}>Change Name</button>
            <Parent fuck={this.changeNameFromBind.bind(this, 'FUCK')}
                    suck={this.changeNameFromBind.bind(this, 'SUCK')}
                    title={this.state.title}/>
            <br/>
            <Test val={this.state.val}/>
            <Route path="/" exact strict render={
              () => {
                return (<h1>HOME!</h1>)
              }
            }/>
            <Route path="/about" exact strict render={
              () => {
                return (<h1>ABOUT!</h1>)
              }
            }/>
            <Route path="/users/:username" exact strict component={Test2}/>
            <Route path="/users2" exact strict render={
              () => (
                this.state.isLoggedIn ? (<Users/>) : (<Redirect to='/'/>)
              )
            }/>
            <Route path="/users-match/:username" exact strict render={
              ({match}) => (
                this.state.isLoggedIn ? (<Test3 username={match.params.username}/>) : (<Redirect to='/'/>)
              )
            }/>
            {/*<Route path="/users2" exact strict component={Users}/>*/}
            {/*<Users/>*/}
            {/*<span>first name: </span>*/}
            {/*<input type="text" ref={input => this.firstName = input}/>*/}
            {/*<button onClick={this.submission}>SUBMIT NAME?</button>*/}
            <Route path="/formrefs" exact strict component={BasicFormRefs}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
