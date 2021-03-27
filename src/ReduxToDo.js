
import './App.css';
import React from 'react';
import {connect} from 'react-redux';
// import {add} from './actions.js';
// import {remove} from './actions.js';
// import {handle} from './actions.js';
// import {select} from './actions.js';

class ReduxToDo extends React.Component{
	constructor(props){
	super(props);
	
 }

render(){
	return (
    <div>
    <div style={{height:"130px",backgroundColor:"#ff2800"}}>
    <h1 style={{color:"white",marginLeft:"300px"}}>My ToDo List</h1>

        <form>
    <input type="text" onChange={(event)=>{this.props.handleInput(event)}} value={this.props.currentItem.text} placeholder="Enter a task..." style={{resize:"none",marginLeft:"50px",width:"550px",height:"40px"}}/>
    <button type="button" onClick={(event)=>{this.props.addItem(event)}} style={{height:"46px",width:"190px",cursor:"pointer"}}>add</button>
        </form>
    </div>
    <div>
 
    {this.props.items.map(item=>(<div id={item} key={item} onClick={(event)=>this.props.selectItem(event)} className="one"><p style={{display:"inlineBlock",verticalAlign:"middle"}}>{item}</p><button onClick={(event)=>this.props.removeItem(event)} id="but" value={item} style={{display:"inlineBlock",height:"100%",width:"40px",cursor:"pointer"}}>x</button></div>))}

    </div>
    </div>
	);
}
}

//
const mapStateToProps=(state)=>{
  return{
    items:state.items,
    currentItem:state.currentItem,
    select:state.select,
    bgcolor:state.bgcolor,
    textdec:state.textdec
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addItem:(e)=>dispatch({type:'ADD',text:e}),
    removeItem:(e)=>dispatch({type:'REMOVE',text:e.currentTarget.value}),
    selectItem:(e)=>dispatch({type:'SELECT',text:e.currentTarget.id}),
    handleInput:(e)=>dispatch({type:'HANDLE',text:e.target.value})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ReduxToDo);