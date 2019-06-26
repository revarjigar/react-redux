import React, {Fragment} from 'react';

const Child = (props) => {
  return(
    <Fragment>
      <button onClick={props.parentInstructions}>{props.title} | {props.xyz}</button>
    </Fragment>
  )
};

export default Child;