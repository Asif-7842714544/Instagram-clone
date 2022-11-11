import React, { Component } from 'react'
import MainContent from './MainContent';
import Navbar from './Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
              <Navbar />
              <MainContent />
            </div>
         );
    }
}
 
export default Home;