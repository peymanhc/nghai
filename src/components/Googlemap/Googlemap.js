import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
const Googlemap = (props) => {
  const place ={ lat: 25.187223434448242, lng: 55.28083419799805 };
  const { ref, map ,google } = useGoogleMaps(
    //   Our Key
    "AIzaSyBJlza72Zw8tAFzC1NTXvPlQcHmbIZR5G4&libraries",
    {
      center: place,
      zoom: 15,
    }
  );
  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: place, map });
  }
  return (
    <div ref={ref} style={{ width: "100%", margin: "auto", height: props.height }} />
  );
};

export default Googlemap;
