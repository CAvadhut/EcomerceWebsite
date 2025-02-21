import { useEffect, useState } from "react";
import {
  Box,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Menu,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Yourlocations from "../../menuData/MainMenuData";
import { ShopingLogo } from "../../../assets";
import accountOptions from "../../menuData/MainMenuData";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState("current");
  const [apiData, setApiData] = useState({}); // Store only successful API responses
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const productData = useAppSelector((s: RootState) => s.ecartData);
  const navigate = useNavigate();
  const [d, setD] = useState<any>([]);
  // const formattedData = productData.map((item) => ({
  //   id: item.id,
  //   name: item?.title,
    // availabilityStatus: item?.availabilityStatus,
    // description: item?.description,
    // images: item?.thumbnail,
    // price: item?.price,
  // }));
  // setD(productData);
  // const getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://dummyjson.com/products/category/smartphones"
  //     );
  //     const formattedData = response.data.products.map((item) => ({
  //       id: item.id,
  //       name: item.title,
  //     }));

  //     //
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setD([]);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("your-api-url");
      const data = await response.json();
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching data", error);
      setItems([]);
    }
  };
  const handleOnSearch = (string, results) => {
    setSearchTerm(string);
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
  const CartData = useAppSelector((s: RootState) => s.ecartData);
  const WishlistData = useAppSelector((s: RootState) => s.ecartWishlist);

  const handleOnSelect = (item) => {
    setTimeout(() => {
      navigate("/productDetails", { state: { product: item } });
    }, 100);
  };

  const formatResult = (item: any) => {
    return (
      <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
        <span style={{ marginLeft: "10px" }}>
          {item.title} - {item.name}
        </span>
      </div>
    );
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const urls = [
        "https://dummyjson.com/products/category/smartphones",
        "https://dummyjson.com/products/category/laptops",
        "https://dummyjson.com/products/category/fragrances", // Assume this API fails
        "https://dummyjson.com/products/category/skincare",
        "https://dummyjson.com/products/category/groceries",
        "https://dummyjson.com/products/category/home-decoration",
      ];

      // Fetch all APIs in parallel
      const promises = urls.map((url) =>
        axios
          .get(url)
          .then((response) => ({ category: url.split("/").pop(), data: response.data }))
          .catch(() => null)
      );

      const results = await Promise.all(promises);
console.log(results,'results');
{results.map((e)=>(
  console.log(e?.data.products,'resultss')
  
  ))}
      const formattedData = results?.data.products.map((item) => ({
        id: item.id,
        name: item.title,
      }));
      // Store only successful responses
      // const newData = {};aa
      // results.forEach((result) => {
      //   if (result) newData[result?.category] = result.data;
      // });

      setApiData(formattedData);
      console.log(formattedData,'results'); // Update state with successful API responses
    };

    fetchAllData();
  }, []);


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#e8e1e1",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "start", width: "50%" }}>
          <Box
            component={"img"}
            src={ShopingLogo}
            height={60}
            width={{ sm: 180, xl: 200 }}
            sx={{
              width: { xs: "50px", sm: "20px", lg: "100px" },
              height: { xs: "50px", lg: "60px" },
              padding: "10px",
            }}
            onClick={() => navigate("./page-heading")}
            p={1}
          />
          <Box sx={{ opacity: 999, width: "350px", alignContent: "center" }}>
            {items && Array.isArray(items) && (
              <ReactSearchAutocomplete
                items={apiData}
                onSelect={handleOnSelect}
                autoFocus
                value={searchTerm}
                onSearch={handleOnSearch}
                formatResult={formatResult}
                placeholder="Search by brand or product name..."
                fuseOptions={{ keys: ["brand", "name"] }}
              />
            )}
          </Box>
        </Box>
        {/* Right Side */}
        <Box sx={{ display: "flex", justifyContent: "end", width: "50%" }}>
          {/* Location Selector */}
          <Box display={{ xs: "none", lg: "flex" }}>
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
            <Box p={1.5} onClick={() => navigate("/Wishlist")}>
              <IconButton color="primary">
                <Badge
                  badgeContent={WishlistData?.length}
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
                  badgeContent={CartData?.reduce(
                    (total, e) => total + e.quantity,
                    0
                  )}
                  color="error"
                  sx={{ fontSize: 30 }}
                >
                  <AddShoppingCartIcon sx={{ fontSize: 40 }} />
                </Badge>
                <Typography sx={{ color: "black" }}>Cart</Typography>
              </IconButton>
            </Box>
          </Box>

          {/* Account Button */}
          <Box mt={1} justifyContent={"flex-end"}>
            <IconButton color="primary" onClick={handleAccountClick}>
              <PermIdentityIcon sx={{ fontSize: 40 }} />
              <Typography
                sx={{ color: "black", justifyContent: "flex-end" }}
                display={{ xs: "none", md: "block" }}
              >
                Account
              </Typography>
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
