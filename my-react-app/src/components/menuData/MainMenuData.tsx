  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import PersonIcon from '@mui/icons-material/Person';
  import ShareLocationIcon from '@mui/icons-material/ShareLocation';
  import SellIcon from '@mui/icons-material/Sell';
  import TuneIcon from '@mui/icons-material/Tune';
  import LogoutIcon from '@mui/icons-material/Logout';
  import RestartAltIcon from "@mui/icons-material/RestartAlt";
  import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const locationsData = [
    { label: "Browse All Categories", value: "current" },
    { label: "New York", value: "ny" },
    { label: "Los Angeles", value: "la" },
    { label: "Chicago", value: "chicago" },
    { label: "San Francisco", value: "sf" },
  ];
  
  const pageheadingData = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Shop", value: "shop" },
    { label: "Vendors", value: "vendors" },
    { label: "Megha Menu", value: "meghaMenu" },
    { label: "Blog", value: "blog" },
    { label: "Page", value: "page" },
    { label: "Contact", value: "contact" },
  ];
  
  const menuData = {
    home: [
      { label: "All Categories", value: "all" },
      { label: "Technology", value: "tech" },
      { label: "Health", value: "health" },
      { label: "Education", value: "education" },
      { label: "Sports", value: "sports" },
    ],
    about: [
      { label: "Company Info", value: "info" },
      { label: "Our Team", value: "team" },
      { label: "Careers", value: "careers" },
      { label: "Mission & Vision", value: "mission" },
    ],
    shop: [
      { label: "Men's Fashion", value: "men" },
      { label: "Women's Fashion", value: "women" },
      { label: "Electronics", value: "electronics" },
      { label: "Home & Kitchen", value: "home" },
    ],
    vendors: [
        { label: "All Categories", value: "all" },
        { label: "Technology", value: "tech" },
        { label: "Health", value: "health" },
        { label: "Education", value: "education" },
        { label: "Sports", value: "sports" },
      ],
      meghaMenu: [
        { label: "Company Info", value: "info" },
        { label: "Our Team", value: "team" },
        { label: "Careers", value: "careers" },
        { label: "Mission & Vision", value: "mission" },
      ],
      blog: [
        { label: "Men's Fashion", value: "men" },
        { label: "Women's Fashion", value: "women" },
        { label: "Electronics", value: "electronics" },
        { label: "Home & Kitchen", value: "home" },
      ],
      page: [
        { label: "Company Info", value: "info" },
        { label: "Our Team", value: "team" },
        { label: "Careers", value: "careers" },
        { label: "Mission & Vision", value: "mission" },
      ],
      contact: [
        { label: "Men's Fashion", value: "men" },
        { label: "Women's Fashion", value: "women" },
        { label: "Electronics", value: "electronics" },
        { label: "Home & Kitchejn", value: "home" },
      ],
  };

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Technology", value: "tech" },
  { label: "Health", value: "health" },
  { label: "Education", value: "education" },
  { label: "Sports", value: "sports" },
];

const Yourlocations = [
  { label: "Your Location", value: "current" },
  { label: "New York", value: "ny" },
  { label: "Los Angeles", value: "la" },
  { label: "Chicago", value: "chicago" },
  { label: "San Francisco", value: "sf" },
];

const accountOptions = [
  { label: "My Account", value: "myaccount",icon:<PersonIcon/> },
  { label: "Order Tracking", value: "ordertracking",icon:<ShareLocationIcon/> },
  { label: "My Voucher", value: "myvoucher",icon:<SellIcon/> },
  { label: "Compare", value: "signout",icon:<RestartAltIcon/>  },
  { label: "My Wishlist", value: "mywishlist",icon:<FavoriteBorderIcon/>  },
  { label: "My Wishlist", value: "mywishlist",icon:<AddShoppingCartIcon/>  },
  { label: "Settings", value: "settings",icon:<TuneIcon/>  },
  { label: "Sign Out", value: "signout",icon:<LogoutIcon/>  },
];
  export default {menuData,pageheadingData,locationsData,categories,Yourlocations,accountOptions}