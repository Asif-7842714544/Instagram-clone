import React, { Component } from 'react'
import Post from './Post';
import Post_img from "../../images/post.jpg"
import uploadIcon from "../../images/upload.png"


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[]
         }
    }

    getPot=()=>{
        let data=[
            {
                "postId":"1234",
               "userName":"Asif",
               "PostImgUrl":Post_img,
               "timeStamp":"1222",
               "likes":"225"
            },
            {
                "postId":"1234",
               "userName":"Asif",
               "PostImgUrl":Post_img,
               "timeStamp":"1222",
               "likes":"225"
            },
        ]
        this.setState({postArray:data})
    }

    componentDidMount(){
        this.getPot()
    }

    
    render() { 
        return ( 
           <div>
            <div className=' h-[100px] w-[600px] text-center '>
          
                <div className=''>
                  <label className=''>
                     <img  className='h-[80px] w-[25] mb- ml-72 ' src={uploadIcon} />
                  </label>
               <input className='ml-8' type="file" />
               </div>
            
            </div>
            {
                this.state.postArray.map((item,index)=>(
            <Post id={item.postId} userName={item.userName} Postimg={item.PostImgUrl} likes={item.likes} />
                ))
            }
            </div>
         );
     }
    }
export default MainPage;