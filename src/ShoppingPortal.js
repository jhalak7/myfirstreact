
import './App.css';
import React from 'react';
import {connect} from 'react-redux';

class ShoppingPortal extends React.Component{
	constructor(props){
	super(props);
 }

render(){
	return (
    <div>
    <div id="onediv">
    {this.props.products.map(item=>(<div id={item.productId} key={item.productId} className="one"><img id="image" src={item.imageUrl}></img><br/><p>{item.name}</p><br/><h6>{item.price}</h6><h4>{item.offerPrice}</h4><button onClick={(event)=>this.props.addItem(event)} id={item.productId} name={item.productId} className="but" value={item.productId} style={{display:"inlineBlock",height:"50px",width:"100%",cursor:"pointer"}}>Add to Cart</button><button onClick={(event)=>this.props.removeItem(event)} id={item.offerPrice} className="but" value={item.offerPrice} style={{display:"inlineBlock",height:"50px",width:"100%",cursor:"pointer"}}></button></div>))}
    </div>
    <div id="twodiv">
    <table>
    <tr>
    <td>Your Cart:</td>
    {this.props.cart.map(item=>(<React.Fragment key={item.productId}><td>{item.name}</td></React.Fragment>))}
    </tr>
    <tr>
    <td>Price:</td>
    {this.props.cart.map(item=>(<React.Fragment key={item.productId} ><td>{item.offerPrice}</td></React.Fragment>))}
    </tr>
    <tr>
    <td>Total Price:</td>
    {this.props.cart.map(item=>(<React.Fragment key={item.productId} ><td>{this.props.total}</td></React.Fragment>))}
    </tr>
    </table>
	</div>
    </div>
    );
}
}

//
const mapStateToProps=(state)=>{
  return{
    products:state.products,
    cart:state.cart,
    disable:state.disable,
    total:state.total
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addItem:(e)=>dispatch({type:'ADD',text:e.currentTarget.id}),
    removeItem:(e)=>dispatch({type:'REMOVE',text:e.currentTarget.id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ShoppingPortal);