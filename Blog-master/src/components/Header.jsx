import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component:{
        background: 'black',
        color: 'red'
    },
    tool: {
        color: 'yellow',
        justifyContent: 'center',
        '& > *': {
            padding: 20,
        }
    },
    link:
    {
        textDecoration:'none',
        color:'inherit',
    }
})

const Header = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar className={classes.component}>
                <Toolbar className={classes.tool}>
                    <Link className={classes.link} to='/'><Typography>Home</Typography></Link>
                    <Typography>About</Typography>
                    <Typography>Contact US</Typography>
                    <Typography>Login</Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
