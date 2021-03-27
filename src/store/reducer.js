const initState={
	userText:'',
	passText:''
};

const reducer=(state=initState,action)=>{
	const newState={...state};
		if(action.type==='USER_PASS'){
			newState.userText=document.getElementById("userId").value;
			newState.passText=document.getElementById("passId").value;
		
		if(newState.userText==="admin" && newState.passText==="admin")
		alert("Welcome "+newState.userText);
		else{
		alert("You are not a Valid User!!");
		}
	}

	return newState;
}

export default reducer;