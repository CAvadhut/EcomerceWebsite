import RootLayout from "./components/rootLayout.tsx/RootLayout";
import PageHeading from "./components/layout/pageHeading/PageHeading";
import Slider from "./pages/slider/Slider";
import FeaturedCategories from "./components/featuredCategories/FeaturedCategories";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import LoginPage from "./components/loginPage/LoginPage";
import Cart from "./components/layout/cart/Cart";
import PopularProduct from "./components/popularProduct/PopularProduct";
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/PageHeading" element={<PageHeading />} />
          <Route path="/featuredCategories" element={<FeaturedCategories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PopularProduct" element={<PopularProduct />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
