
import './App.css';
import React from 'react';
import {connect} from 'react-redux';

class ReduxLogin extends React.Component{
	constructor(props){
	super(props);
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
          <button onClick={this.props.validate}>Submit</button>
      </div>
	);
}
}
const mapStateToProps=(state)=>{
  return{
    userText:state.userText,
    passText:state.passText
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    validate:()=>dispatch({type:'USER_PASS'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ReduxLogin);