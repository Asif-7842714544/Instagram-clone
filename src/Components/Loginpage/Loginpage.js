import { Grid } from '@mui/material';
import React, { Component } from 'react'
import insta_img from "../../images/9364675fb26a.svg"
import insta_logo from "../../images/insta-Logo.png"
import appStore from "../../images/app.png"
import playStore from "../../images/play.png"
import Signin from '../Signin/Signin';
import Signup from '../Signin/Signup';

class Loginpage extends Component {
    constructor(props) {
        super(props);
        this. state = { 
            isLogin :true
           
         }
    }
   
    Changelogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin:false})
        else
            this.setState({isLogin:true})
    }

    render() { 
        return ( 
            <div >
            <Grid container>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={6} >
             <div className='items-center flex mt-2 ml-16'>
                <div >
                    <img src={insta_img} width="454px"  />
                </div>
                <div>
                    <div className='bg-white h-auto w-80  border-solid border-2 border-gray-300 mt-2.5'>  
                      <img className='px-12' src={insta_logo} />
                    <div className='mt-4'> 

                    {
                        this.state.isLogin ? <Signin /> :  <Signup />
                    } 
                    
                    <div>  
                        <div className='flex justify-center'>
                            <div className=' h-0 w-24 border-2 mt-3'></div>
                            <div className='font-bold '>OR</div>
                            <div className='h-0 w-24 border-2 mt-3'></div>
                        </div>

                        <div className='font-bold mt-6 text-blue-400 pl-9'>
                           Log in With Facebook                        
                        </div>
                        <div className='pl-9'>Forgot Password?</div>    
                    </div>
                    </div>
                   </div>

                     <div className='m-2 h-15 w-74 text-center mt-4 border-4 border-solid bg-slate-200'>
                       
                       {
                        this.state.isLogin ? 
                        <div>
                            Don't have an account?<span onClick={this.Changelogin} className="font-bold hover:cursor-pointer text-blue-500">Sign up</span>
                        </div> : 
                        <div>
                            Have an account?<span onClick={this.Changelogin} className="font-bold hover:cursor-pointer text-blue-500">Sign In</span>
                        </div>
                       }
                        
                        
                     </div>

                     <div>
                        <div className='mt-2'>
                            Get the App
                        </div>
                        <div className='flex space-x-8 mt-8'>
                            <img src={appStore} width={136}  />
                            <img src={playStore} width={136} />
                        </div>
                     </div>

                </div>
             </div>
            </Grid>
            <Grid item xs={3} >
            </Grid> 
            </Grid>
            </div>
         );
    }
}
 
export default Loginpage;
