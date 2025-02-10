import { Box, Typography } from "@mui/material";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";

const Cart = () => {
  const count = useAppSelector((s: RootState) => s.ecartData);
  // const

  console.log(count, "dataaaa");

  return (
    <>
      <Box
        bgcolor={"red"}
        color={"black"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"60%"}
        textAlign={"center"}
      >
        {count.length > 0?
        <>
        {count.map((e) => (
          <Box textAlign={"center"}>
            <Typography bgcolor={"red"}>{e.brand}</Typography>
          </Box>
        ))}
        </>
        :<>
        <Typography>empty</Typography>
        </>}
        
      </Box>
    </>
  );
};

export default Cart;
