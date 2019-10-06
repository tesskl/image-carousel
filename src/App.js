import React from 'react';

import { Grid, IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import  ImageCard  from "./components/imageCard";
import { connect } from 'react-redux';

const containerStyle={
  minHeight: '100vh'
}
const arrowStyle={
  height: "2em",
  width: "2em",
}

class App extends React.Component {
  
 render(){
  console.log(this.props);
    return (
      <Grid container spacing={6} direction="row" justify="center" alignItems="center" style={containerStyle}>
        <Grid item>
          <IconButton>
            <ArrowBack style={arrowStyle} onClick={this.props.prevImage}/>
          </IconButton>
        </Grid>

        <Grid item>
          <ImageCard index={this.props.index} type={"left"}></ImageCard>
        </Grid>

        <Grid item>
          <ImageCard index={this.props.index + 1} type={"center"}></ImageCard>
        </Grid>

        <Grid item>
          <ImageCard index={this.props.index + 2} type={"right"}></ImageCard>
        </Grid>

        <Grid item>
          <IconButton>
          <ArrowForward style={arrowStyle} onClick={this.props.nextImage}/>
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextImage: () => {
      dispatch({type: "NEXT_IMAGE"})
    },
    prevImage: () => {
      dispatch({type: "PREV_IMAGE"})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 

