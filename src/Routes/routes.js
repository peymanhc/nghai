import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blog from "../pages/Blog/Blog";
import Service from "../pages/ServiceDetail/Service";
import NotFound from "../pages/404/NotFound";
import Servicepayment from "../pages/Servicepayment/Servicepayment";
import FoodDetail from "../pages/FoodDetail/FoodDetail";
import Order from "../pages/Order/Order";
import DeepCleaning from "../pages/DeepCleaning/DeepCleaning";
import Frequency from "../pages/Frequency/Frequency";
import HoursPage from "../pages/Hourspage/HoursPage";
import HomeCleaningTime from "../pages/HomeCleaningTime/HomeCleaningTime";
import SofaCleaning from "../pages/SofaCleaning/SofaCleaning";
import LoadingPage from "../components/Loading/Loading";
import Login from "../pages/Login/Login";
import { useSelector } from "react-redux";
function Routes({ match }) {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <BrowserRouter>
      {Loading ? (
        <LoadingPage />
      ) : (
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Aboutus" component={About} />
            <Route exact path="/Features" component={Features} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/serviceDetail" component={Service} />
            <Route exact path="/servicePayment" component={Servicepayment} />
            <Route exact path="/FoodDetail" component={FoodDetail} />
            <Route exact path="/OrderMenu" component={Order} />
            <Route exact path="/DeepCleaning" component={DeepCleaning} />
            <Route exact path="/HomeCleaningFrequency" component={Frequency} />
            <Route
              exact
              path="/HomeCleaningTime"
              component={HomeCleaningTime}
            />
            <Route
              exact
              path="/HomeCleaningServiceDetail"
              component={HoursPage}
            />
            <Route exact path="/SofaCleaning" component={SofaCleaning} />
            <Route exact path="/Login" component={Login} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default Routes;
