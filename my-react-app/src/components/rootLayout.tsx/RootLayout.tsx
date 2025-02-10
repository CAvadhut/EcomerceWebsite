import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../footer/Footer";
import { AppBar, Box, Toolbar } from "@mui/material";

const RootLayout = () => {
  return (
    <Box sx={{ }}>
      {/* ✅ AppBar wraps only the Navbar */}
      <AppBar position="static">
        <Toolbar> 
          <Navbar />
        </Toolbar>
      </AppBar>

      {/* ✅ Main Content (Flexible to push footer to bottom) */}
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>

      {/* ✅ Footer stays at the bottom */}
      <Footer />
    </Box>
  );
};

export default RootLayout;
