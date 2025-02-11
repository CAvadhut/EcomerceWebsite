import { Box, Button, Divider, Typography } from "@mui/material";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { Link } from "react-router-dom";
import "../cart/Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
// https://fakestoreapi.com/products
interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  availabilityStatus: string;
  brand: string;
}

const Cart = () => {
  const CartData: CartItem[] = useAppSelector((s: RootState) => s.ecartData);

  console.log(CartData, "dataaaa");

  const convertToINR = (priceInUSD) => {
    const exchangeRate = 83; // Example rate (can change)
    return (priceInUSD * exchangeRate).toFixed(2);
  };

  return (
    <>
      <Box
        sx={{
          padding: "50px 100px 15px 100px",
          overflow: "auto",
          bgcolor: "#fff",
        }}
      >
        <Box>
          {CartData?.length > 0 ? (
            <>
              <Box>
                <Typography
                  sx={{
                    fontSize: "28px",
                    lineHeight: "36px",
                    fontWeight: 400,
                    fontFamily: '"Amazon Ember", Arial, sans-serif',
                  }}
                >
                  Shopping Cart
                </Typography>
                <Link
                  to={""}
                  style={{
                    textDecoration: "none",
                    color: "#2162a1",
                    fontFamily: '"Amazon Ember", Arial, sans-serif',
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Deselect all items
                </Link>
                <Typography
                  sx={{
                    marginRight: 0,
                    float: "right",
                    overflow: "visible",
                    textAlign: "right",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: '"Amazon Ember", Arial, sans-serif',
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  Price
                </Typography>
              </Box>
              <Box>
                <Divider sx={{ mt: 2 }} />
              </Box>
              {CartData?.map((e) => (
                <Box
                  textAlign={"center"}
                  display={"flex"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  {/* 1st */}
                  <Box sx={{ textAlign: "left" }}>
                    <img
                      src={e.images[0]}
                      alt={e.title}
                      width="200px"
                      height="150px"
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    />
                  </Box>
                  {/* 2nd */}
                  <Box textAlign={"left"} width={"100%"}>
                    {e?.description.length > 80 ? (
                      <>
                        <Typography className="descriptionTypo">
                          {e.description.slice(0, 100)}
                        </Typography>
                        <Typography className="descriptionTypo">
                          {e.description.slice(100, 200)}
                        </Typography>
                        <Typography className="descriptionTypo">
                          {e.description.slice(200, 300)}
                        </Typography>
                      </>
                    ) : (
                      <Typography className="descriptionTypo">
                        {e.description}
                      </Typography>
                    )}
                    <Typography className="descriptionTypo">
                      {e?.title}
                    </Typography>
                    <Typography className="StockTypo">
                      {e?.availabilityStatus}
                    </Typography>

                    <Typography>{e?.brand}</Typography>
                    <Box>
                      <Box
                        sx={{
                          border: "2px solid yellow",
                          width: "fit-content",
                          borderRadius: "15px",
                        }}
                      >
                        <Button>
                          <DeleteIcon sx={{ color: "black" }} />
                        </Button>
                        {e.quantity}
                        <Button>
                          <AddIcon sx={{ color: "black" }} />
                        </Button>
                      </Box>
                      <Divider orientation="vertical" sx={{ color: "black" }} />
                      <Box></Box>
                    </Box>
                  </Box>
                  {/* 3rd */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Amazon Ember", Arial, sans-serif',
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      ₹{convertToINR(e?.price)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <>
              <Box mt={2}>
                <Typography sx={{ fontSize: "20px", padding: "3px" }}>
                  ✅ Your cart is empty. Start shopping now!
                </Typography>
                <Typography sx={{ fontSize: "20px", padding: "3px" }}>
                  ✅ Looks like you haven't added anything to your cart yet!
                </Typography>
                <Typography sx={{ fontSize: "20px", padding: "3px" }}>
                  ✅ Nothing here yet! Find something amazing to add to your
                  cart.
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cart;
