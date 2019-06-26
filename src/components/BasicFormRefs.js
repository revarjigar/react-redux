import React, {Component} from 'react';

const MyInput = (props) => {
  return(
    <input type="text" ref={props.inputRef}/>
  );
};

const BasicFormRefsFn = () => {
  let firstName = null;

  const refsFnSubmission = () => {
    console.log('first name using fn ', firstName.value);
  };

  return (
    <div>
      <span>first name using fn : </span>
      <input type="text" ref={input => firstName = input}/>
      <br/>
      <span>input using a child component: </span>
      <MyInput inputRef={input => firstName = input}/>
      <br/>
      <button onClick={refsFnSubmission}>SUBMIT NAME?</button>
    </div>
  );
};

class BasicFormRefs extends Component {
  submission = () => {
    console.log('first name using class ', this.firstName.value);
  };

  render() {
    return (
      <div>
        <span>first name using class: </span>
        <input type="text" ref={input => this.firstName = input}/>
        <button onClick={this.submission}>SUBMIT NAME?</button>
        <br/>
        <BasicFormRefsFn/>
      </div>
    );
  }
}

export default BasicFormRefs;