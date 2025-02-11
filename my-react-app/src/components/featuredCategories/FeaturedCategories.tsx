import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToEcartData } from "../../redux/slices/counter/ecartDataReducer";
import { addToWishlist } from "../../redux/slices/counter/ecartWishlist";
import { removeToWishlist } from "../../redux/slices/counter/ecartWishlist";

interface Product {
  id: number;
  title: string;
  brand: string;
  images: string[];
}
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 767, min: 464 }, items: 2 },
};

const FeaturedCategories = () => {
  // ✅ Correctly Typed State
  const [dataShow, setDataShow] = useState<Product[]>([]);
  const [iconChange, setIconChange] = useState<Record<number, boolean>>({});
  const dispatch = useAppDispatch();

  // ✅ Fetch Data from API
  const getData = async () => {
    try {
      const response = await axios.get<{ products: Product[] }>(
        "https://dummyjson.com/products"
      );
      setDataShow(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 3 }}>
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
          >
            <Box
              textAlign="right"
              onClick={() =>
                setIconChange((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
              }
              sx={{ cursor: "pointer" }}
            >
              <Box >
              {iconChange[item.id] ? (
                <FavoriteIcon sx={{ fontSize: 40, color: "red" }}  onClick={() => dispatch(removeToWishlist(item))} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 40 }} onClick={() => dispatch(addToWishlist(item))} />
              )}
              </Box>
            </Box>
            <Box onClick={() => dispatch(addToEcartData(item))} sx={{ cursor: "pointer" }}>
              <img
                src={item.images[0]}
                alt={item.title}
                width="200px"
                height="150px"
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </Box>
            <Typography>{item.brand}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FeaturedCategories;
