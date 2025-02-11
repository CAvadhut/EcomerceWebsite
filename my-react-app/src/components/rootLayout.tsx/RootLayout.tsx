import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";

const RootLayout = () => {
  return (
 <>
 <Box sx={{ position: "fixed", width: "100%", top: 0, zIndex: 1000 }}>
  <Navbar />
</Box>
<Box sx={{ marginTop: "80px" }}> {/* Adjust this based on your Navbar height */}
  <Outlet />
</Box>
{/* <Footer /> */}

 </>
  );
};

export default RootLayout;
