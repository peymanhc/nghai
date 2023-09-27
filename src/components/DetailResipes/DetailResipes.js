import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import detailimg from "../../images/detail.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 50,
    borderBottom: "2px solid rgba(0,0,0,0.7)",
    padding: 30,
  },
  blacktitle: {
    fontSize: 18,
    color: "black",
    fontWeight: 700,
  },
  redtitle: {
    fontSize: 18,
    color: "#f44336",
  },
  cards: {
    marginTop: 20,
  },
  media: {
    height: 400,
    width: "100%",
    objectFit: "cover",
  },
  mediaright: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  cardleft: {
    border: "1px solid #f44336",
    margin: 5,
  },
  cardHead: {
    color: "#f44336",
    fontSize: 16,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "black",
    textTransform: "capitalize",
  },
  time: {
    fontSize: 15,
    color: "rgba(0,0,0,0.6)",
    textTransform: "capitalize",
  },
  about: {
    fontSize: 17,
    color: "rgba(0,0,0,0.7)",
    textTransform: "capitalize",
  },
}));
const DetailResipes = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography className={classes.blacktitle} variant="h4">
          Recent Recipes
        </Typography>
        <Typography className={classes.redtitle} variant="h4">
          All Recipes
        </Typography>
      </Box>
      <Grid className={classes.cards} container>
        <Grid item sm={12} lg={5}>
          <Link style={{ textDecoration: "none" }} to="/OrderMenu">
            <Card style={{ height: "98%" }} className={classes.cardleft}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={detailimg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    className={classes.cardHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    ___Chicken
                  </Typography>
                  <Typography
                    className={classes.cardSubtitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Top Japen best resurant for such
                  </Typography>
                  <Typography
                    className={classes.time}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    cooking time: 30 min
                  </Typography>
                  <Typography
                    className={classes.about}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item sm={12} lg={7}>
          <Box className={classes.root}>
            <Grid container>
              {[0, 1, 2, 3].map((item) => (
                <Grid style={{ margin: "auto" }} key={item} sm={6}>
                  <Link style={{ textDecoration: "none" }} to="/OrderMenu">
                    <Card className={classes.cardleft}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.mediaright}
                          image={detailimg}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography
                            className={classes.cardHead}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            ___Chicken
                          </Typography>
                          <Typography
                            className={classes.cardSubtitle}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            Top Japen best resurant for such
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailResipes;
