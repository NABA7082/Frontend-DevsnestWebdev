import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { fontSize } from '@mui/system'

const useStyles = makeStyles({
    conatiner:{
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
             padding : '0 5px 5px 5px'
        }
    },
    image:{
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0px 0px'
    },
    texts:{
        color: 'red',
    },
    heading:{
        color: 'green'
    },
    details:{
        wordBreak: 'break-word'
    }
    
})

const Post = () => {
    const classes = useStyles();
    const url = 'https://www.pinkvilla.com/files/bts_jungkook_purple_hair_butter_concept_photo_main.jpg'//'https://images.unsplash.com/photo-1562911791-d5677c36a51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80'
    return (
        <>
            <Box className={classes.conatiner}>
                <img src={url} alt="image" className={classes.image}/>
                <Typography className={classes.texts} style={{fontSize:'15px'}}>Music</Typography>
                <Typography className={classes.heading} style={{fontSize:'18px', fontWeight: '600'}} >JUNGKOOK</Typography>
                <Typography className={classes.texts} style={{fontSize:'15px'}} >Author: Nps bjb djbj</Typography>
                <Typography className={classes.details} style={{fontSize: '14px'}}>Hii llllllllllllssssssssssssssssssssssssssssss lorem ipsum lorem</Typography>

            </Box>
        </>
    )
}

export default Post
