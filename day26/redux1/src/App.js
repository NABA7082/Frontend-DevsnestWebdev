import './App.css';

/*function App() {
  return (
    <div className="App">
      <h1>Input</h1>
      <form>
       <input type="text" id="name" placeholder="Name"></input>
      <input type="text" id="email" placeholder="Email"></input>
      </form>
      
    </div>
  );
}*/


import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {name} from './actions/index';
import {email} from './actions/index';
import {useSelector,useDispatch} from "react-redux"
const App=()=>{
    const newEmail=useSelector((state)=>state.email)
    const newName=useSelector((state)=>state.name)

    const dispatch=useDispatch();
    return (
        <div className="main">
          
            <TextField variant="outlined" label="Name" id="name" size="medium" className="input"  onChange={(e)=>{
                dispatch(name(e.target.value))
            }}></TextField>
            <TextField variant="outlined" label="Email" id="email" size="medium"  className="input" onChange={(e)=>{
                dispatch(email(e.target.value))
            }}></TextField>
            <Typography variant="h6" display="block" >Name:{newName}</Typography>
            <Typography variant="h6" display="block" >Email:{newEmail}</Typography>
           
        </div>
    )
}
export default App;


