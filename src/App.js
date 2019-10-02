import React from 'react';
import images from './images';
import { Grid, IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

export default function App() {
  const imgStyle={
    maxWidth: "600px",
    maxHeight: "500px"
  }
  const containerStyle={
    minHeight: '100vh'
  }
  const arrowStyle={
    height: "2em",
    width: "2em",
  }

 const index = 4;


  return (
    <Grid container spacing={6} direction="row" justify="center" alignItems="center" style={containerStyle}>
      <Grid item>
        <IconButton>
          <ArrowBack style={arrowStyle}/>
        </IconButton>
      </Grid>
      {images.slice(index -1, index + 2).map(img => 
      <Grid item>
        <img key={img.id} src={img.url} style={imgStyle}/>
      </Grid>)}
      <Grid item>
        <IconButton>
          <ArrowForward style={arrowStyle}/>
        </IconButton>
      </Grid>
    </Grid>
  );
}

