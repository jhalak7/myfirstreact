
import './App.css';
import React from 'react';

class Login extends React.Component{
	constructor(props){
	super(props);
	this.state={userText:'',passText:''};
	this.validate=this.validate.bind(this);
	
	}		
validate(){
 this.setState(
      (state, props) => {
        return {userText:document.getElementById("userId").value,passText:document.getElementById("passId").value};
      });
 

	alert(this.state.userText);
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
          <br/>
          <br/>
          <br/>
          Username: <input type="text" id="userId"  />
          <br/>
          <br/>
          <br/>
          Password: <input type="text" id="passId" />
          <br/>
          <br/>
          <br/>
          <button onClick={this.validate}>Submit</button>
      </div>
	);
}
}



export default Login;