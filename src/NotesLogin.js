
import React from 'react';

import ReactDOM from 'react-dom';
class NotesLogin extends React.Component{
	constructor(props){
	super(props);
  this.state={users:[{username:'ronaldo',password:'juventus'},
  {username:'messi',password:'barcelona'},
{username:'neymar',password:'psg'}
],
pathLength:''};
this.signIn=this.signIn.bind(this);
this.pink=this.pink.bind(this);
	
 }

 signIn(){
   alert("a");
   let user=document.getElementById("userId").value;
   let pass=document.getElementById("passId").value;
   
   const filtered=this.state.users.filter(item=>((item.username!==user)));
 }

 pink(){
  this.state.pathLength=document.getElementById('starpath').getTotalLength();
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  document.getElementById('starpath').style.strokeDashoffset = pathLength - drawLength;
 }

  
render(){
  
document.getElementById('starpath').style.strokeDasharray = this.state.pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
document.getElementById('starpath').style.strokeDashoffset = pathLength;
	return (
    
    <div class="divId" onScroll={this.pink}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.6 107.6" id="star-svg">
  <path id="starpath" fill="none" stroke="black" stroke-width="2"  d=" ... " style={{strokeDasharray:{this.state.pathLength}}} /></svg>
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
       
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
    <p class="signIn">Sign In</p>
      <p class="text">Username or Email Address</p>
    <input class="input" type="email" id="userId" placeholder="Username or Email"/>
    
    
    <p class="text">Password</p>
    <input type="password" id="passId" class="input"  placeholder="Password"/>
    
    <p style={{cursor:"pointer",marginTop:"30px",color:"rgb(67,122,224)"}}>Can't access to your account?</p>

    <button onClick={this.signIn} class="button">Sign In</button>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"60px",fontSize:"12px"}}>
      <div>Help</div>
      <div style={{marginLeft:"20px",marginRight:"20px"}}>Terms of use</div>
      <div>Privacy policy</div>
    </div>
   </div>
	);
}
}



export default NotesLogin;