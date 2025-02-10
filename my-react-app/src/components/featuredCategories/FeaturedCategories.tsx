import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";
import Cart from "../layout/cart/Cart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ecartData } from "../../redux/slices/counter";
import { RootState } from "../../redux/store";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 767, min: 464 }, items: 2 },
};

const FeaturedCategories = () => {
  const [dataShow, setDataShow] = useState([]);
  const dispatch = useAppDispatch();
  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setDataShow(response?.data?.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const count = useAppSelector((s: RootState) => s.ecartData);
  console.log(count, "ecartData");

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 3 }}>
      {/* <Cart /> */}
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        arrows
        swipeable
        draggable
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {dataShow.map((item) => (
          <Box
            key={item.id}
            sx={{
              textAlign: "center",
              padding: "10px",
              bgcolor: "#e8e1e1",
              m: 1,
            }}
            onClick={() => dispatch(ecartData(item))}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              width="200px"
              height="150px"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <Typography>{item.brand}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FeaturedCategories;
