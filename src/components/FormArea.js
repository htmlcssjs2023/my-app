import { Fab, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    function changeHandler(event){
      const {name, value} = event.target;
      setNote(preValues =>{
        return {
          ...preValues,
          [name]: value
        }
      })
    }
    function clickHandler(){
      addNote(note);
      setNote({
        title: "",
        content:"",
      })
    }
  return (
    <Paper style={{ 
        margin:"10px 10%",
        padding: "25px 50px"
     }}
    >
        <form>
            <TextField 
             onChange={changeHandler}
             name="title"
             value={note.title} 
             style={{marginBottom:"10px"
             }}/>
            <TextField
            onChange={changeHandler}
            name="content" value={note.content} 
            label="Content" 
            multiline 
            rows={4} 
            fullWidth 
            autoComplete="off"
            />
            <Fab onClick={clickHandler} style={{margin:"20px"}}>
               +
            </Fab>
        </form>
    </Paper>
  )
}

export default FormArea
