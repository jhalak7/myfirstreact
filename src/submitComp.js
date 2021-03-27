
import './App.css';
import React from 'react';

class SubmitComp extends React.Component{
  constructor(props){
  super(props);
  this.state={userText:'',passText:''};
  this.validate=this.validate.bind(this);
}

validate=()=>{
 this.setState(
      (state, props) => {
        return {userText:document.getElementById("userId").value,passText:document.getElementById("passId").value};
      });
 

  if(this.state.userText==="admin" && this.state.passText==="admin")
    alert("Welcome "+this.state.userText);
  else{
    alert("You are not a Valid User!!");
    }
       }   

render(){
  return (
      <div>
          <br/>
          <br/>
          <br/>
          <button onClick={this.validate}>Submit</button>
      </div>
  );
}
} 


export default SubmitComp;