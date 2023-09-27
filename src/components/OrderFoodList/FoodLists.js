import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../../Redux/Actions/AddOrder";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: "auto",
  },
  box: {
    width: "100%",
    minHeight: 150,
    backgroundColor: "white",
    boxShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
  },
  navitem: {
    width: 100,
    margin: 10,
    backgroundColor: "white",
    border: "none",
    color: "black",
  },
  listItem: {
    marginTop: 10,
    display: "flex",
    borderTop: "1px solid rgba(0,0,0,0.2)",
    padding: "25px 0",
    [theme.breakpoints.down(1000)]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  itemtitle: {
    textTransform: "capitalize",
    fontSize: 20,
    color: "#f44336",
    fontWeight: 700,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: "50%",
    objectFit: "cover",
  },
  textlistitem: {
    fontSize: 15,
    color: "black",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  order: {
    color: "white",
    backgroundColor: "#f44336",
    padding: "10px 20px",
    width: "20%",
    "&:hover": {
      backgroundColor: "#ff0000",
    },
    [theme.breakpoints.down(1000)]: {
      marginTop:20,
      width: "100%",
          },
  },
  width: {
    backgroundColor: "gray",
    border: "1px solid gray",
    width: 60,
    textAlign: "center",
  },
  height: {
    backgroundColor: "white",
    border: "1px solid gray",
    width: 60,
    textAlign: "center",
  },
  price1: {
    textDecoration: "line-through",
  },
  price2: {
    color: "#ff0000",
    fontWeight: 700,
  },
  number: {
    border: "1px solid rgba(0,0,0,0.2)",
    justifyContent: "center",
    width: 42,
    height: 42,
    fontSize: 16,
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
  },
  addbuttons: {
    width: 21,
    height: 20,
    border: "1px solid rgba(0,0,0,0.2)",
    textAlign: "center",
    cursor: "pointer",
  },
  item:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    flexDirection:"row",
    width:"100%",
    [theme.breakpoints.down(1000)]: {
      flexDirection:"column",
          },
  }
}));
const FoodLists = () => {
  const classes = useStyles();
  const [activeNav, setactiveNav] = useState(0);
  const ChangeActive = (active) => {
    setactiveNav(active);
  };
  const dispatch = useDispatch();
  const Order = useSelector((state) => state.Order);
  const test = (name) => {
    dispatch(addIngredient(name));
  };
  const test2 = (name) => {
    dispatch(removeIngredient(name));
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.box}>
          <Box padding={2}>
            <Box className={classes.nav}>
              {navitem.map((item) => (
                <Button
                  onClick={() => ChangeActive(item.id)}
                  key={item.id}
                  className={classes.navitem}
                  style={{
                    color: activeNav === item.id && "white",
                    backgroundColor: activeNav === item.id && "#f44336",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            {navitem.map((item) => (
              <Box className={classes.listItem} container>
                <Box className={classes.item}
                >
                  <img
                    className={classes.image}
                    alt="pizza"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXlIqy6FYY2Y1gSMeV_rfAZO8GPHRqQ-Qqg&usqp=CAU"
                    }
                  />
                  <Box marginBottom="20px">
                    <Typography className={classes.itemtitle} variant="h6">
                      margarita
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.textlistitem}
                    >
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Box className={classes.flex}>
                    <Typography className={classes.width}>32cm</Typography>
                    <Typography className={classes.height}>42cm</Typography>
                  </Box>
                  <Box className={classes.flex}>
                    <Typography className={classes.price1}>$ 25</Typography>
                    <Typography className={classes.price2}>$ 18</Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Box
                        onClick={() => test2(item.name)}
                        className={classes.addbuttons}
                      >
                        -
                      </Box>
                      <Box
                        onClick={() => test(item.name)}
                        className={classes.addbuttons}
                      >
                        +
                      </Box>
                    </Box>
                    <Box className={classes.number}>
                      {Order.ingredient[item.name] || 0}
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.flex}>
                  <Button className={classes.order}>Order</Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const navitem = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Meat",
  },
  {
    id: 2,
    name: "vegetable",
  },
  {
    id: 3,
    name: "Chicken",
  },
  {
    id: 4,
    name: "Spicy",
  },
  {
    id: 5,
    name: "Cheese",
  },
];

export default FoodLists;
