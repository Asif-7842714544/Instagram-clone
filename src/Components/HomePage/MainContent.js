import { Grid } from '@mui/material';
import React, { Component } from 'react'
import InfoSection from './InfoSection';
import MainPage from './MainPage';
import StatusBar from './StatusBar';
import Suggetion from './Suggetion';
 
class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container>
                  <Grid item xs={2}>

                  </Grid>
                  <Grid item xs={6}>
                    <div>
                        <StatusBar />
                        <MainPage />
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                     <InfoSection />
                     <Suggetion />
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
            </div>
         );
    }
}
 
export default MainContent;