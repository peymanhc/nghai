import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Header from "../../images/OrderList.png";
import Categories from "../../components/OrderCategories/Categories";
import cat1 from "../../images/catergory1.png";
import cat2 from "../../images/catergory2.png";
import cat3 from "../../images/catergory3.png";
import cat4 from "../../images/catergory4.png";
import FoodLists from "../../components/OrderFoodList/FoodLists";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 450,
    objectFit: "cover",
  },
  root: {
    marginTop: 50,
    width: "100%",
    display: "flex",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));
const Order = () => {
  const classes = useStyles();
  return (
    <Box>
      <img className={classes.header} src={Header} alt="Header" />
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          {categories.map((item) => (
            <Categories key={item.id} icon={item.icon} title="Burger Menu" />
          ))}
        </Box>
      </Box>
      <FoodLists />
    </Box>
  );
};

const categories = [
  {
    id: 1,
    icon: cat1,
    title: "Burger Menu",
  },
  {
    id: 2,
    icon: cat2,
    title: "Fiza Menu",
  },
  {
    id: 3,
    icon: cat3,
    title: "Snaks Menu",
  },
  {
    id: 4,
    icon: cat4,
    title: "Drinks Menu",
  },
];

export default Order;
