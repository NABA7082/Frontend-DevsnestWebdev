import React from 'react'
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home/Home'
import {Box} from '@mui/material'
import Detail from './components/post/Detail';
import CreateView from './components/post/CreateView';
import SwitchBase from '@mui/material/internal/SwitchBase';
import UpdateView from './components/post/UpdateView';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
      <Header />
      <Box style={{marginTop: 64}}>
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/detail' component={Detail}/>
        <Route exact path ='/create' component={CreateView}/>
        <Route exact path ='/update' component={UpdateView}/>
        </Switch>
      </Box>
      </BrowserRouter>
    </div>
  )
}

export default App;
