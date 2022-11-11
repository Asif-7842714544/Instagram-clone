import React, { Component } from 'react'
import pp from "../../images/pp4.jpeg"
import love from "../../images/love.svg"
import comment from "../../images/comment.svg"
import share from "../../images/share.svg"
import { Avatar } from '@mui/material'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
         }
    }

    getComments=()=>{
          let data=[
            {
                "userName":"Asif",
                "commentId":"1234",
                "timeStamp":"",
                "description":"Awesome"
            },
            {
                "userName":"Asif",
                "commentId":"1234",
                "timeStamp":"",
                "description":"Awesome"
            },
            {
                "userName":"Asif",
                "commentId":"1234",
                "timeStamp":"",
                "description":"Awesome"
            }
          ]
          this.setState({commentList: data})
    }

    componentDidMount(){
        this.getComments()
    }
    
    render() { 
        return ( 
            <div className='w-[600px]  border-2 border-solid border-[#dbdbdb] bg-white mt-4  '>
                
                {/* header */}
               <div className='flex h-14 border-b-2 border-solid border-[#dbdbdb] '>
                <Avatar className='min-w-[45px] min-h-[45px] m-2 ' src={pp} />
                <div className='font-bold mt-4'>{this.props.userName}</div>
               </div>
               {/* Image */}
               <div>
                <img className='' src={this.props.Postimg} width="600px"/>
               </div>
               {/* Analytics */}
               <div>
                <div className='flex h-6 w-6 space-x-3 mt-2 '>
                    <img src={love} />
                    <img src={comment} />
                    <img src={share} />
                </div>
                <div className='font-bold ml-1'>{this.props.likes} likes</div>
               </div>

               {/* comment Section */}
               <div>
                {
                    this.state.commentList.map((item,index)=>(
                        <div className='m-2'>{item.userName}:{item.description}</div>
                    ))
                }
                 
                 <input className='h-11 w-[600px] border-t-2 border-solid border-[#dbdbdb] ' type="text" placeholder='Add a comment...'/>
               </div>
           </div> 
         );
    }
}
 
export default Post;