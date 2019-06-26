import React, {Fragment} from 'react';

const User = (props) => {
  return (
    <Fragment>
      <span>Name : {props.name} | age : {props.age}&nbsp;</span>
      <button onClick={props.delEvent}>Delete</button>
      &nbsp;
      <input type="text" onChange={props.changeEvent} value={props.name}/>
      <br/>
    </Fragment>
  );
};

export default User;