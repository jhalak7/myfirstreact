
import './App.css';
import React from 'react';

class TodoComponent extends React.Component{
	constructor(props){
	super(props);
  this.state={items:[],currentItem:{text:'',key:''},select:false,bgcolor:"#fff",color:"#000",textdec:"none"};
	
     this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.selectItem=this.selectItem.bind(this);
 }

  addItem(e){ 
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      var itemss = [...this.state.items, newItem];
    this.setState({
      items: itemss,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  removeItem(key){
    console.log(key);
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  selectItem(key){
    this.setState({select:!this.state.select});
    if(this.state.select)
      this.setState({
        bgcolor:"#888",
        color:"#fff",
        textdec:"line-through"
      })
    else
      this.setState({
        bgcolor:"#fff",
        color:"#000",
        textdec:"none"
      })
    document.getElementById(key).style.backgroundColor=this.state.bgcolor;
    document.getElementById(key).style.color=this.state.color;
    document.getElementById(key).style.textDecoration=this.state.textdec;

  }
render(){
	return (
    <div>
    <div style={{height:"130px",backgroundColor:"#ff2800"}}>
    <h1 style={{color:"white",marginLeft:"300px"}}>My ToDo List</h1>

        <form onSubmit={this.addItem}>
    <input type="text" onChange={this.handleInput} value={this.state.currentItem.text} placeholder="Enter a task..." style={{resize:"none",marginLeft:"50px",width:"550px",height:"40px"}}/>
    <button type="submit" style={{height:"46px",width:"190px",cursor:"pointer"}}>add</button>
        </form>
    </div>
    <div>
 
    {this.state.items.map(item=>(<div id={item.key} key={item.key} onClick={()=>this.selectItem(item.key)} class="one"><p style={{display:"inlineBlock",verticalAlign:"middle"}}>{item.text}</p><button onClick={()=>this.removeItem(item.key)} id="but" style={{display:"inlineBlock",height:"100%",width:"40px",cursor:"pointer"}}>x</button></div>))}

    </div>
    </div>
	);
}
}



export default TodoComponent;