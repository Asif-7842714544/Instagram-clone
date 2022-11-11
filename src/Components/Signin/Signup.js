import React, { Component } from 'react'
import {storage,auth} from "../Firebase"


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId:null,
            name:null,
            userName:null,
            password:null,
         }
    }

    newSignUp=()=>{
        auth.createUserWithEmailAndPassword(this.state.emailId,this.state.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    let payload={
        "userId":"412",
        "userName":"Arshad",
        "name":"Arshad",
        "profileImage":"gfghvv"
    }

    const requestOptions ={
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify(payload),
    }

    fetch("http://localhost:8080/users",requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
            })
            .catch(error =>{
                 
            })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }
    
    render() { 
        return ( 
            <div className='space-y-4 pb-4 pl-9'>
               <input onChange={(e)=>{this.state.emailId=e.currentTarget.value}} placeholder='Phone number or EmailId' className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="text"/>
               <input onChange={(e)=>{this.state.name=e.currentTarget.value}} placeholder='FullName'                 className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="text"/>
               <input onChange={(e)=>{this.state.userName=e.currentTarget.value}} placeholder='UserName'                 className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="text"/>
               <input onChange={(e)=>{this.state.password=e.currentTarget.value}} placeholder='Password'                 className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="password"/>
               <button onClick={this.newSignUp} className='w-60 h-7 rounded border-2 font-bold border-blue-600 bg-blue-600 text-white'>SignUp</button>
            </div>
         );
    }
}
 
export default Signup;