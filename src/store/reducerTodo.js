const initState={
	items:[],currentItem:{text:'',key:''},
	select:false,bgcolor:"#fff",color:"#000",textdec:"none",keys:[]
	};

const reducerTodo=(state=initState,action)=>{
	const newState={...state};

	switch(action.type)
	{
		case 'ADD':  
		action.text.preventDefault();
    	if(newState.currentItem.text !==""){
      	var itemss = [...newState.items, newState.currentItem.text];
    	var keyss=[...newState.keys,newState.currentItem.key];
    	newState.items=itemss;
    	newState.currentItem.text='';
    	newState.currentItem.key='';
    		
								}
			break;

		case 'REMOVE':
   	 	const filteredItems= newState.items.filter(item =>
      item!==action.text);
   	 	console.log(action.text);
   	 	console.log(newState.items);
   	 	newState.items=filteredItems;
			break;

		case 'HANDLE':
		newState.currentItem={
			text:action.text,
			key:Date.now()
		};
			break;

		case 'SELECT':
		newState.select=!newState.select;
		if(newState.select){
			newState.bgcolor='#888'; 
			newState.color='#fff';
			newState.textdec='line-through';
		}
		else{
			newState.bgcolor='#fff';
			newState.color='#000';
			newState.textdec='none';
		}
    	 document.getElementById(action.text).style.backgroundColor=newState.bgcolor;
    	 document.getElementById(action.text).style.color=newState.color;
    	 document.getElementById(action.text).style.textDecoration=newState.textdec;
    		break;
	}

	return newState;
}

export default reducerTodo;