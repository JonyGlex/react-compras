import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Register";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route extct path="products/:category" element={<ProductList />} />
          <Route extct path="cart" element={<Cart />} />
          <Route extct path="login" element={<Login />} />
          <Route extct path="product/:id" element={<Product />} />
          <Route extct path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
