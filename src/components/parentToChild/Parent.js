import React from 'react';
import Child from './Child';

const Parent = (props) => {
  return(
    <div>
      <h4>parent-sibling :</h4>
      <Child parentInstructions={props.fuck} title={props.title} xyz="xyz"/>
      <Child parentInstructions={props.suck} title={props.title} xyz="abc"/>
      {/*<Child {...props} xyz="xyz"/>*/}
    </div>
  )
};

export default Parent;