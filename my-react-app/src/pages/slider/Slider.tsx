import {  Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import banner_1 from "../../assets/fullstack-ecommerce-main/fullstack-ecommerce-main/images/slideBanner2.jpg";
import banner_2 from "../../assets/fullstack-ecommerce-main/fullstack-ecommerce-main/images/slideBanner1.jpg";
import banner_3 from "../../assets/fullstack-ecommerce-main/fullstack-ecommerce-main/images/slideBanner2.jpg";
import { useEffect, useState } from "react";

const Slider = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      bannerImage: banner_1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      bannerImage: banner_2,
    },
    {
      name: "Random Name #3",
      description: "Another banner here!",
      bannerImage: banner_3,
    },
  ];

  return (
<>
<Carousel autoPlay interval={2000} animation="slide" indicators={false}>
      {items.map((item, index) => (
        <Paper key={index} style={{ textAlign: "center", padding: "10px" }}>
          <img
            src={item.bannerImage}
            alt={item.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Paper>
      ))}
    </Carousel>
</>
  );
};
export default Slider