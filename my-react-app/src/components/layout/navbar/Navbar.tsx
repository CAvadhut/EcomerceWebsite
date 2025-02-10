import { useState } from "react";
import {
  Box,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import categories from "../../menuData/MainMenuData";
import Yourlocations from "../../menuData/MainMenuData";
import { ShopingLogo } from "../../../assets";
import accountOptions from "../../menuData/MainMenuData";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("current");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  const handleAccountClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const wishlistCount = 15;
  const count = useAppSelector((s:RootState)=>s.ecartData)
  console.log(count?.length,'count');
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#e8e1e1",
          width:'100%'
        }}
      >
        {/* Left Side */}
        <Box
          sx={{ display: "flex", justifyContent: "start", width: "50%" }}
        >
          {/* Logo */}
          <Box
            component={"img"}
            src={ShopingLogo}
            height={60}
            width={{sm:180,xl:200}}
            // onClick={()=>navigate('/')}
            sx={{width:{xs:'50px',sm:"20px",lg:"100px"},height:{xs:"50px",lg:"60px"},padding:'10px'}}
            p={1}
          />

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // p: 2,
              // width:'800px',
              minWidth:{xs:"180px",sm:'400px'}
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              
              size="small"
              placeholder="Search for items..."
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: "flex", gap: 0 }}
                  >
                    <TextField
                      select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      variant="standard"
                      size="small"
                      
                      sx={{
                        minWidth:{xs:"100px",sm:'200px'},
                        width:'80px',
                        border: "none",
                        // "& .MuiSelect-select": { padding: 0 },
                        "& .MuiInputBase-input": {fontSize:{xs:10,md:16} },
                      
                      }}
                    >
                      {categories.categories.map((category) => (
                        <MenuItem key={category.value} value={category.value}>
                          {category.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Divider orientation="vertical" flexItem />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                // maxWidth: 600,
                boxShadow: 1,
                borderRadius: 1,
                backgroundColor: "white",
              }}
            />
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{ display: "flex", justifyContent: "end", width: "50%", }}
        >
          {/* Location Selector */}
         <Box display={{xs:"none",lg:'flex'}}>
         <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              minWidth: "200px",
            }}
          >
            <TextField
              select
              value={selectedLocation}
              onChange={handleLocationChange}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            >
              {Yourlocations?.Yourlocations.map((location) => (
                <MenuItem key={location.value} value={location.value}>
                  {location.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box p={1.5}>
            <IconButton color="primary">
              <Badge
                badgeContent={wishlistCount}
                color="error"
                sx={{ fontSize: 30 }}
              >
                <RestartAltIcon sx={{ fontSize: 40 }} />
              </Badge>
              <Typography sx={{ color: "black" }}>Compare</Typography>
            </IconButton>
          </Box>

         
          <Box p={1.5}>
            <IconButton color="primary">
              <Badge
                badgeContent={wishlistCount}
                color="error"
                sx={{ fontSize: 30 }}
              >
                <FavoriteBorderIcon sx={{ fontSize: 40 }} />
              </Badge>
              <Typography sx={{ color: "black" }}>WishList</Typography>
            </IconButton>
          </Box>

   
          <Box p={1.5}>
            <IconButton color="primary" onClick={() => navigate("/cart")}>
              <Badge
                badgeContent={count?.length}
                color="error"
                sx={{ fontSize: 30 }}
              >
                <AddShoppingCartIcon sx={{ fontSize: 40 }}/>
              </Badge>
              <Typography sx={{ color: "black" }}>Cart</Typography>
            </IconButton>
          </Box>
         </Box>

          {/* Account Button */}
          <Box mt={1} justifyContent={'flex-end'}>
            <IconButton color="primary" onClick={handleAccountClick}>
              <PermIdentityIcon sx={{ fontSize: 40 }} />
              <Typography sx={{ color: "black",justifyContent:'flex-end' }} display={{xs:"none",md:'block'}}>Account</Typography>
            </IconButton>

            {/* Account Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              
            >
              {accountOptions.accountOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={() => {
                    if (option.value === "signout") {
                      localStorage.clear();
                      window.location.reload();
                    } else if (option.value === "mywishlist") {
                      navigate("/cart");
                    }
                    handleClose();
                  }}
                >
                  {option.icon}
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
