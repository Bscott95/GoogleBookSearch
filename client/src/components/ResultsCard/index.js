import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ResultsCard( title, author, description, image, Button ) {
  return (
    <div>
      <Grid container style={{backgroundColor: "#f1f6f9", marginLeft:40, width:'90%'}}>
        <Grid
          item
          xs={12}
          style={{ paddingLeft: 10 }}
        >
          <h3>{title}</h3>
          <h5>Written By {author}</h5>
          </Grid>
          <Grid item xs={2} style={{ padding:10 }}><img src={image} alt="thumbnail"></img></Grid>
          <Grid item xs={10}style={{ padding:0 }}>
          <p>{description}</p>
          </Grid>
      </Grid>
    </div>
  );
}
