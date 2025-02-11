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
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Private Routes Wrapped in RootLayout */}
        <Route element={<PrivateRoute />}>
          <Route element={<RootLayout />}>
            <Route path="/slider" element={<Slider />} />
            <Route path="/page-heading" element={<PageHeading />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/featured-categories" element={<FeaturedCategories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/popular-product" element={<PopularProduct />} />

          </Route>
        </Route>

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
