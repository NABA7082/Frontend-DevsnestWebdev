import React from 'react';
import {Box,FormControl,InputBase, TextareaAutosize,Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
//import {FormControl,InputBase}from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//import { Button } from 'react-bootstrap';
const UseStyle = makeStyles({
  container:{
    padding:'0 100px',
    
  },
  image:
  {
  width:'100%',
  height:'60vh',
  objectFit:'cover'
  },
  form:
  {
    display:'flex',
    flexDirection:'row',
    marginTop:10

  },
  text:
 {
   flex:1,
   margin:'0 30px',
   fontSize:25

 } ,
 textArea:
 {
   width:'100%',
   marginTop:50,
   border:"none",
   fontSize:16,
   '&:focus-visible':
   {
   outline:'none'
   }
 


 }
  
})
const createview=()=>{
  const classes=UseStyle();
  const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  return(
    <Box className={classes.container}>
      <img className={classes.image}src={url} alt="banner /"></img>
      <Box className={classes.form}>
        <AddCircleIcon fontSize="large" color="action"/>
         <InputBase placeholder='Title' className={classes.text}/>
      <Button variant="contained" color="primary">Publish</Button>
      </Box>
      <TextareaAutosize className={classes.textArea}
      minRows={5}
      placeholder='Tell your story.....'


      />


    </Box>
  )
}
export default createview;