import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import Email from "../../components/Email/Email";
import Items from "../../components/Portfolio/Items";
import PortFolio from "../../components/Portfolio/PortFolio";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <ServiceDetail />
      <Email />
      <PortFolio
        title={"apartman"}
        imageHeader={"https://wallpaperaccess.com/full/334443.jpg"}
        body={
          <>
            <Items
              imgitem="https://wallpaperaccess.com/full/334443.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and industries for previewing
layouts and visual mps. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="m is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Villa"
              offprice="AED 800"
              price="AED 176"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
l"
            />
            <Items
              imgitem="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4aykb?ver=2f14&q=60&m=6&h=384&w=768&b=%23FFFFFFFF&l=f&o=t&aim=true"
              itemTitle="Office Test"
              offprice="AED 146"
              price="AED 146"
              description="Loreasdasder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
          </>
        }
      />
      <PortFolio
        title={"Villa"}
        imageHeader={
          "https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
        }
        body={
          <>
            <Items
              imgitem="https://wallpaperaccess.com/full/334443.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and industries for previewing
layouts and visual mps. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="m is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Villa"
              offprice="AED 800"
              price="AED 176"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
l"
            />
            <Items
              imgitem="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4aykb?ver=2f14&q=60&m=6&h=384&w=768&b=%23FFFFFFFF&l=f&o=t&aim=true"
              itemTitle="Office Test"
              offprice="AED 146"
              price="AED 146"
              description="Loreasdasder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
          </>
        }
      />
      <PortFolio
        title={"Office"}
        imageHeader={
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4aykb?ver=2f14&q=60&m=6&h=384&w=768&b=%23FFFFFFFF&l=f&o=t&aim=true"
        }
        body={
          <>
            <Items
              imgitem="https://wallpaperaccess.com/full/334443.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and industries for previewing
layouts and visual mps. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Stadio Apartmant"
              offprice="AED 146"
              price="AED 146"
              description="m is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
            <Items
              imgitem="https://cf.bstatic.com/images/hotel/max1024x768/171/171170838.jpg"
              itemTitle="Villa"
              offprice="AED 800"
              price="AED 176"
              description="Lorem ipsum is placeholder text commonly used in the
graphic, print, and publishing industries for previewing
l"
            />
            <Items
              imgitem="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4aykb?ver=2f14&q=60&m=6&h=384&w=768&b=%23FFFFFFFF&l=f&o=t&aim=true"
              itemTitle="Office Test"
              offprice="AED 146"
              price="AED 146"
              description="Loreasdasder text commonly used in the
graphic, print, and publishing industries for previewing
layouts and visual mockups. Lorem ipsum is placeholder text"
            />
          </>
        }
      />
    </Box>
  );
};

export default Services;
