import React, { useEffect } from "react";
import Facility from "../../components/Facility/Facility";
import Header from "../../components/Header/Header";
import OffBanner from "../../components/OffBanner/OffBanner";
import Packages from "../../components/Packages/Packages";
import Services from "../../components/Services/Services";
import Works from "../../components/Works/Works";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header /> 
      <Services />
      <OffBanner />
      <Facility />
      <Packages />
      <Works
        link="/SofaCleaning"
        buttontext="clean"
        boxcolor="#ff0000"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNhSyfx3lzAkL1IG5q2e9rQwUvmTiSqyOMQ&usqp=CAU"
        description="EXPOCENTRE AO has featured its projects at the 6th
                  International Microelectronics Forum EXPOCENTRE AO has
                  featured its projects at the 6th International
                  Microelectronics Forum"
      />
    </div>
  );
};

export default Home;
