import React from 'react'
import Grid from '@material-ui/core/Grid';


export default function Jumbotron() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{textAlign:'center', margin:50, backgroundColor:'#f1f6f9', padding:50}}>
          <h1>(React Google Books Search)</h1>
          <h3>Search for an Save Books of Interest</h3>
        </Grid>
      </Grid>
    </div>
  )
}
