import React, { Component } from 'react'
import {storage,auth} from "../Firebase"

class  Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId:null,
            password:null
         }    
    }
   
    login=()=>{

       auth.signInWithEmailAndPassword(this.state.emailId,this.state.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('user',user)
    window.location.reload()
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }

    render() { 
        return ( 
            <div className=' mt-2 space-y-4 pl-9'>  
               <input onChange={(e)=>{this.state.emailId=e.currentTarget.value}} placeholder='Phone number,Username' className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="text"/>
               <input onChange={(e)=>{this.state.password=e.currentTarget.value}} placeholder='Password'              className='rounded w-52 h-9  border-solid border-2 border-gray-200 bg-gray-100' type="text"/>
               <button onClick={this.login} className='w-60 h-7 rounded border-2 font-bold border-blue-600 bg-blue-600 text-white'>Signin</button>
            </div>
            
         );
    }
}
 
export default Signin ;