import React from 'react'
import { Box} from '@mui/material';
import {makeStyles,typography } from '@mui/styles';
import { height } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Typography } from '@mui/material';
import {Link} from "react-router-dom";
const useStyle= makeStyles({
  container:{
    padding:'0 100px',
    
  },
  image:
  {
  width:'100%',
  height:'60vh',
  objectFit:'cover'
  },
  icons:
  {
    float:'right'
  },
  icon:
  {
    margin:'5px',
    border:'1px solid black',
    padding:'5px',
    borderRadius:10,
  },
  heading:
  {
    fontSize:40,
    fontWeight:600,
    display:"flex",
    justifyContent:"center",
    margin:'30px 0 10px 15px',


  },
  subheading:
  {
    color:"#878787",
    display:'flex',
    margin:'20px 0'


  }
  
})
const Detail=()=>{
  const classes=useStyle();
  const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  return(
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image}/>
 
 <Box className={classes.icons}>
   <Link to="/update"><EditIcon className={classes.icon} color="primary"/></Link>
   <DeleteIcon className={classes.icon} color="error"/>
   
   </Box>
   
   <typography className={classes.heading}>Title of the Blog</typography>
   <Box className={classes.subheading}>
   <typography>Author: <span style={{fontWeight:600}}>codeforinterview</span></typography>
    
   <typography style={{marginLeft:'auto'}}>22 June 2021</typography>
   </Box>
    
    
    
    
 
 </Box>
    
  )

}
export default Detail;
