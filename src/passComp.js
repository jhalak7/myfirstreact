
import './App.css';
import React from 'react';

class PassComp extends React.Component{
  constructor(props){
  super(props);
}

render(){
  return (
      <div>
          <br/>
          <br/>
          <br/>
          Password: <input type="text" id="passId" />
      </div>
  );
}
}


export default PassComp;