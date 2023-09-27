import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Banner from '../../images/Offers.png'

const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: 150,
      objectFit: "cover",
    },

  }));
const Offers = () => {
    const classes = useStyles();
    return (
        <Box>
            <img className={classes.banner} alt="offers" src={Banner} />
        </Box>
    )
}

export default Offers
