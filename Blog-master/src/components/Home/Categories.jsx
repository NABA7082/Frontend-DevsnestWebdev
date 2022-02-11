import React from 'react'
import { Button,Tab,Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { categories } from '../../constants/data';
import {Link} from 'react-router-dom'


// const useStyle = makeStyles({
//     creates:{
//         marginTop : '20px',
//         color:'red',
//         backgroundColor: 'red'
//     }
// })

const useStyles = makeStyles({
    creates:{
        marginTop : '20px',
        color:'red',
        backgroundColor: 'red'
    },
    table:{
        border: '1px solid black'
    },
    link:
    {
        textDecoration:'none',
        color:'inherit'

    }

})

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <Link to="/create" className={classes.link}><Button variant="contained" className={classes.creates}style={{width:'86%'}}>Create Blog</Button></Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All cartegories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>{category}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                
            </Table>
        </>
    )
}

export default Categories
