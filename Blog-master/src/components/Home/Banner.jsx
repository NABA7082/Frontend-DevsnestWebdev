import React from 'react'
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    image:{
        background: `url(${'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}) center/75% repeat-x #000 `, 
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Code for Interview</Typography>
            </Box>
        </>
    )
}

export default Banner
