import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import pp from "../../images/pp4.jpeg"

class InfoSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div >
               <div className='flex h-14 w-[300px] mt-12 '>
                <Avatar className='min-w-[60px] min-h-[60px] ' src={pp} />
                <div>
                    <div className='ml-5 mt-5'>Asif basha</div>
                </div>
               </div>
            </div>
         );
    }
}
 
export default InfoSection;