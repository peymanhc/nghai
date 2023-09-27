import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Food from "./Food";
import FastfoodIcon from "@material-ui/icons/Fastfood";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 60,
  },
}));
const Foods = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={3}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={5}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={1.5}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={4}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={3.5}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Food
            foodtype="Beeftest"
            title="title"
            icon={<FastfoodIcon />}
            score={3.5}
            time="20-25"
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Foods;
