import { Fab, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';


function FormArea() {
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    console.log(note);
  return (
    <Paper style={{ 
        margin:"10px 10%",
        padding: "25px 50px"
     }}
    >
        <form>
            <TextField name="title" label="Title" fullWidth autoComplete="off" style={{marginBottom:"10px"}}/>
            <TextField 
            label="Content" 
            multiline 
            rows={4} 
            fullWidth 
            autoComplete="off"
            />
            <Fab style={{margin:"20px"}}>
               +
            </Fab>
        </form>
    </Paper>
  )
}

export default FormArea
