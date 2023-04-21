import React from 'react';
import Paper from '@mui/material/Paper';

function Header() {
  return (
    <Paper elevation={3} style={{ padding:"5px",display:"flex" }}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' style={{ width:"50px", height:"50px" }}></img>
      <h1 style={{ margin:"0", fontFamily:"cursive",fontWeigh:"bold" }}>React App</h1>
    </Paper>
  )
}

export default Header
