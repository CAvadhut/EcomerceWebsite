import { Box, Paper, Rating, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useAppDispatch } from "../../redux/hooks";
import { addToEcartData } from "../../redux/slices/counter/ecartDataReducer";
import { addToWishlist, removeToWishlist } from "../../redux/slices/counter/ecartWishlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface RecoProduct {
  images: string[];
  brand: string;
  price: number;
  rating: number;
}

const RecommendedProduct = () => {
  const dispatch = useAppDispatch()
  const [mobData, setMobData] = useState<RecoProduct[]>([]);
  const [iconChange, setIconChange] = useState<Record<number, boolean>>({});
  const [autoPlay, setAutoPlay] = useState(false);
  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/category/smartphones");
      setMobData(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const convertToINR = (priceInUSD: number) => {
    const exchangeRate = 83;
    return (priceInUSD * exchangeRate).toFixed(2);
  };

  return (
    <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }} textAlign="center" justifyContent="center">
      {mobData?.map((e, index) => (
        <Box key={index} border="2px solid green" width="300px" height="500px" m={1} p={2} onClick={()=>dispatch(addToEcartData(e))}> 
         <Box
              textAlign="right"
              onClick={() =>
                setIconChange((prev) => ({
                  ...prev,
                  [e.id]: !prev[e.id],
                }))
              }
              sx={{ cursor: "pointer" }}
            >
              <Box>
                {iconChange[e.id] ? (
                  <FavoriteIcon
                    sx={{ fontSize: 40, color: "red" }}
                    onClick={() => dispatch(removeToWishlist(e.id))}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ fontSize: 40 }}
                    onClick={() => dispatch(addToWishlist(e))}
                  />
                )}
              </Box>
            </Box>



          <Typography variant="h6">{e.brand}</Typography> 
          <Typography variant="body1">₹ {convertToINR(e.price)}</Typography>
          <div
            onMouseEnter={() => setAutoPlay(true)}
            onMouseLeave={() => setAutoPlay(false)}
          >
            <Carousel
              autoPlay={autoPlay}
              interval={2000}
              animation="slide"
              indicators={true}
            >
              {e?.images.map((item, idx) => (
                <Paper key={idx} style={{ textAlign: "center", padding: "10px" }}>
                  <img src={item} alt={`Product ${idx}`} style={{ width: "200px", height: "300px" }} />
                </Paper>
              ))}
            </Carousel>
          </div>

          <Rating name="read-only" value={e.rating} readOnly />

        </Box>
      ))}
    </Box>
  );
};

export default RecommendedProduct;
