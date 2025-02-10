import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../footer/Footer";
import { AppBar, Box, Toolbar } from "@mui/material";

const RootLayout = () => {
  return (
    <Box>
      <AppBar position="static">
          <Navbar />
      </AppBar>
        <Outlet />
      <Footer />
    </Box>
  );
};

export default RootLayout;
