import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


class MainPage extends React.Component{
    render(){
        return(<Grid container spacing={8} className="container">
            <Grid item xl={2} lg={3} md={3} sm={4} xs={12}>
                <div style={{border:"1px solid red"}} >goal bar</div> 
            </Grid>
            <Grid item  xl={10} lg={9} md={9} sm={8} xs={12} >
                <div style={{border:"1px solid green"}}>main</div> 
            </Grid>
        </Grid>);
    }
}


export default MainPage;