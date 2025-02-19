import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addToEcartData } from "../../../redux/slices/counter/ecartDataReducer";
import { removeToWishlist } from "../../../redux/slices/counter/ecartWishlist";
interface CartItem {
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  availabilityStatus: string;
  brand: string;
  returnPolicy: string;
}
const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistData: CartItem[] = useAppSelector(
    (s: RootState) => s.ecartWishlist
  );
  console.log("wishlistDatzzza", wishlistData);
  const convertToINR = (priceInUSD) => {
    const exchangeRate = 83;
    return (priceInUSD * exchangeRate).toFixed(2);
  };

  return (
    <>
      <Box mt={3}>
        {wishlistData.length > 0 ? (
          <>
            {wishlistData.map((e) => (
              <>
                <Box
                  display={"flex"}
                  border={"1px solid black"}
                  m={1}
                  width={"50%"}
                  justifyContent={"space-between"}
                  // p={2}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <img src={e.thumbnail} alt="" />
                    </Box>
                    <Box sx={{ alignContent: "center" }}>
                      <Typography>{e.brand}</Typography>
                      <Typography>{e.title}</Typography>
                      <Typography>{e.returnPolicy}</Typography>

                      <Rating name="read-only" value={e.rating} readOnly />
                    </Box>
                  </Box>
                  <Box sx={{ alignContent: "center", textAlign: "right" }}>
                    <Typography>{convertToINR(e.price)}</Typography>
                    <Button
                      onClick={() => {
                        dispatch(removeToWishlist(e.id));
                        dispatch(addToEcartData(e));
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button onClick={() => dispatch(removeToWishlist(e.id))}>
                      Remove
                    </Button>
                  </Box>
                </Box>
              </>
            ))}
          </>
        ) : (
          <>
            <Box sx={{ padding: "40px" }}>
              <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
                Your wishlist is empty. Start adding your favorite items!
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
