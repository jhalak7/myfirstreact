
import sbag from '../res/sbag.webp';
import pbag from '../res/pbag.jpg';
import gbag from '../res/gbag.jpg';
import lbag from '../res/lbag.jpg';
const initState= {
 cart: [
 { name: 'hand bag', productId: '1001', offerPrice: '99' }
 ],
 products: [
 { name: 'school bag', productId: '1002', imageUrl: sbag,
categoryId: 'sbag', price: '149.0', offerPrice: '109' },
 { name: 'picnic bag', productId: '1003', imageUrl: pbag,
categoryId: 'pbag', price: '449', offerPrice: '399' },
 { name: 'laptop bag', productId: '1004', imageUrl: lbag,
categoryId: 'lbag', price: '1399', offerPrice: '1300'},
{name: 'gym bag', productId: '1005', imageUrl: gbag,
 categoryId: 'gbag', price: '599', offerPrice: '499'} 
 ],
 newItem:
 {
 	name:'',productId:'',price:''
 },
 disabl:false,
 total:99,
 
	};

const reducerShop=(state=initState,action)=>{
	const newState={...state};


	switch(action.type)
	{
		case 'ADD':
		newState.disabl=!newState.disabl;
    	 document.getElementsByName(action.text)[0].disabled=newState.disabl;
    	 document.getElementsByName(action.text)[0].innerHTML="Added";

			const newProduct=newState.products.filter(item=>item.productId===action.text);
				
			var items=[...newState.cart,newProduct[0]];
			newState.cart=items;

		console.log(newState.cart);
		
		newState.disabl=!newState.disabl;
		newState.total=parseInt(newState.total)+parseInt(newProduct[0].offerPrice);
		document.getElementById(newProduct[0].offerPrice).disabled=newState.disabl;

		document.getElementById(newProduct[0].offerPrice).innerHTML="Remove From Cart";
			break;

			case 'REMOVE':
			newState.enable=!newState.disabl;
			const remo=newState.cart.filter(item=>item.offerPrice!==action.text);
			const nam=newState.cart.filter(item=>item.offerPrice===action.text);
			document.getElementById(action.text).disabled=newState.disabl;
			document.getElementById(action.text).innerHTML="";
			newState.cart=remo;
			newState.total=parseInt(newState.total)-parseInt(nam[0].offerPrice);
			console.log(newState.cart);
			newState.enable=!newState.disabl;
			document.getElementsByName(nam[0].productId)[0].disabled=newState.disabl;
			document.getElementsByName(nam[0].productId)[0].innerHTML="Add to cart";			
			break;

		}
	return newState;
}

export default reducerShop;