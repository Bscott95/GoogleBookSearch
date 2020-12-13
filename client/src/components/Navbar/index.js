import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"> <Link to="/">Google Books</Link></Button>
          <Button color="inherit">Search</Button>
          <Button color="inherit">Saved</Button>
        </Toolbar>
      </AppBar>
    )
  }
}
