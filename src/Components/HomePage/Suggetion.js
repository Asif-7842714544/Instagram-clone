import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import pp from "../../images/pp4.jpeg"

class Suggetion extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
             <div>
                <div className='mt-5'>
                    <div className='font-bold text-gray-500'>Suggestion For You</div>
                </div >

              <div className='space-y-8 h-[250px] '>
                <div className='flex mt-5'>
                    <Avatar src={pp}/>
                    <div className='font-bold mt-2 ml-4' >Friend1</div>
                </div>
                <div className='flex mt-5'>
                    <Avatar src={pp}/>
                    <div className='font-bold mt-2 ml-4' >Arshad</div>
                </div>
                <div className='flex mt-5'>
                    <Avatar src={pp}/>
                    <div className='font-bold mt-2 ml-4' >Rajiya</div>
                </div>
                <div className='flex mt-5'>
                    <Avatar src={pp}/>
                    <div className='font-bold mt-2 ml-4' >Ibrahim</div>
                </div>
              </div>

             </div>
            </div>
         );
    }
}
 
export default Suggetion;