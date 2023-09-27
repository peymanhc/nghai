import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root:{
        width:"100%",
        minHeight:150,
        padding:20,
        boxShadow:"1px 1px 3px rgba(0,0,0,0.4)"
    }
  }));
const Userbox = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root} >
            
        </Box>
    )
}

export default Userbox
