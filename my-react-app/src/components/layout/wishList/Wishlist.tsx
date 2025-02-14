import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import Rating from '@mui/material/Rating';
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
                  </Box>
                </Box>
              </>
            ))}
          </>
        ) : (
          "hii"
        )}
      </Box>
    </>
  );
};

export default Wishlist;
