
import './App.css';
import React from 'react';
 
class Products extends React.Component{
	constructor(props){
	super(props);
  this.state={products:[{name:'school bag',productId:'1002',categoryId:'110', imageUrl: 'http:testImageUrl1',price:'149.0',offerPrice:'109.5'},
  {name:'school bag-2',productId:'1003',categoryId:'110',price:'149.0',offerPrice:'109.5', imageUrl: 'http:testImageUrl2'}],cart:[
  {name: 'school bag', productId: '1002', price: '109.5' },
  {name: 'laptop bag', productId: '1005', price: '1299.99'}]};
	
 }

  
render(){
	return (
    
    <div>
    <h1>Products:</h1>
    {this.state.products.map(item=>(<React.Fragment key={Date.now()}><h4 style={{display:"inlineBlock",verticalAlign:"middle"}}>Product:{item.name},Product ID:{item.productId},Category ID:{item.categoryId},Price:{item.price},Offer Price:{item.offerPrice}, URL:{item.imageUrl}</h4></React.Fragment>))}
    <h1>Cart:</h1>
    {this.state.cart.map(item=>(<React.Fragment key={Date.now()}><h4 style={{display:"inlineBlock",verticalAlign:"middle"}}>Product:{item.name},Product ID:{item.productId},Price:{item.price}</h4></React.Fragment>))}
    </div>
	);
}
}



export default Products;