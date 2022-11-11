import { Avatar, Grid } from '@mui/material';
import React, { Component } from 'react'
import insta_logo from "../../images/insta-Logo.png"
import home from '../../images/home.svg';
import message from "../../images/message.svg"
import find from "../../images/find.svg"
import react from "../../images/love.svg"
import pp from "../../images/pp4.jpeg"

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='h-14 bg-white border-2'>
                  <Grid  container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                       <img className='mt-1' src={insta_logo} />
                    </Grid>
                    <Grid item xs={3}>
                        <input className='bg-gray-200 mt-2 h-7 w-52 border-2 rounded-full border-solid border-gray-400 text-center ' type="text" placeholder='Search'/>
                    </Grid>
                    <Grid className=' space-x-2 flex flex-grow' item xs={3} >
                     <img className='mt-3 h-[23px] ' src={home}  width="25px" />
                     <img className='mt-3 h-[23px] ' src={message} width="25px"/>
                     <img className='mt-3 h-[23px] ' src={find} width="25px"/>
                     <img className='mt-3 h-[23px] ' src={react} width="25px"/>
                     <Avatar className=''  src={pp} />
                    </Grid>
                    <Grid item xs={1}></Grid>
                  </Grid>
                </div>
            </div>
         );
    }
}
 
export default Navbar;