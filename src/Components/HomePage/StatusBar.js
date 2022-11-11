import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import statusimg from "../../images/pp1.png"
import addStatus from "../../images/statusadd.png"

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList:[]
         }
    }
 
        getData=()=>{
            let data=[
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
                {
                    "userName":"Asif bAsha",
                    "ImageUrl":"statusimg"
                },
            ]
            this.setState({statusList: data})
        }

    
    componentDidMount(){
        this.getData()
    }

    render() { 
        return ( 
        <div>
            <div className=' flex space-x-7 h-[120px] w-[600px] border-2 border-solid border-[#dbdbdb] mt-5 overflow-x-scroll scrollbar-hide'>
                    <img className='max-h-[55px] max-w-[55px] mt-8 ml-2 ' src={addStatus}  />
    
                {
                    this.state.statusList.map((item,index)=>(
                        <div className=' '>
                 <Avatar className='mt-5 min-w-[55px] min-h-[55px] border-[3px] border-solid border-[#DF3968]' src={statusimg} />
                 <div className='text-center  text-sm'>Asif</div>
               </div>
                    ))
                }
            </div>
        </div>
         );
    }
}
 
export default StatusBar;