import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { useState } from "react";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import menuData from "../../menuData/MainMenuData";
import locationData from "../../menuData/MainMenuData";
import pageheadingData from "../../menuData/MainMenuData";
import Slider from "../../../pages/slider/Slider";
import FeaturedCategories from "../../featuredCategories/FeaturedCategories";

const PageHeading = () => {
  const [selectedLocation, setSelectedLocation] = useState("current");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleOpenMenu = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setActiveMenu(index);
    console.log(index, "menuKey");
  };

  const handleClose = () => {
    setMenuAnchor(null);
    setActiveMenu(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#e8e1e1",
          p: 1,
          mt: 1.5,
          color: "white",
        }}
      >
        {/* Browse all categories */}
        <Box minWidth={"200px"}>
          <TextField
            select
            value={selectedLocation}
            onChange={handleLocationChange}
            variant="outlined"
            size="small"
            sx={{
              color: "white",
              ".MuiInputBase-root": {
                bgcolor: "#127712",
                color: "white",
              },
              ".MuiSvgIcon-root": {
                color: "white",
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <GridViewIcon />
                </InputAdornment>
              ),
            }}
          >
            {locationData.locationsData.map((location) => (
              <MenuItem key={location.value} value={location.value}>
                {location.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Navigation Menu */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            color: "black",
          }}
        >
          {pageheadingData.pageheadingData.map((option) => (
            <Box key={option.value}>
              <IconButton
                color="primary"
                onClick={(e) => handleOpenMenu(e, option.value)}>
                <Typography>{option.label}</Typography>
              </IconButton>

              {/* Dropdown Menu */}
              <Menu
                anchorEl={menuAnchor}
                open={activeMenu === option.value}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {(menuData.menuData[option.value] || []).map((menuItem) => (
                  <MenuItem key={menuItem.value} onClick={handleClose}>
                    {menuItem.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>

        {/* Helpline Number */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography>
            <HeadphonesOutlinedIcon sx={{ fontSize: "50px", color: "black" }} />
          </Typography>
          <Typography>
            <Typography sx={{ fontSize: "25px", color: "#127712" }}>
              1900 - 888
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "black" }}>
              24/7 support center
            </Typography>
          </Typography>
        </Box>

      </Box>
      
      <Box>
        <Slider />
      </Box>
      <Box>
        <FeaturedCategories />
      </Box>
    </>
  );
};

export default PageHeading;
