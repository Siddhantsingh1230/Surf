import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Category from "./pages/Category";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopBtn from "react-scroll-to-top";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Signout from "./pages/Signout";
import ForgotPwd from "./pages/ForgotPwd";
import ProductPageList from "./pages/ProductPageList";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [search,setSearch]=useState("");
  const [startsearch,setStartSearch]=useState(false);
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollTopBtn
          className="max-sm:right-5 max-sm:bottom-9 scale=[.85] max-sm:scale-100"
          smooth={true}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            outline: "none",
            boxShadow: "none",
          }}
          component={<ScrollUpBtn />}
        />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch}/>} />
          <Route
            exact
            path="/login"
            element={<Login setProgress={setProgress}  />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup setProgress={setProgress} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Protected>
                <Cart setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/about"
            element={<About setProgress={setProgress} />}
          />
          <Route
            exact
            path="/deals"
            element={<Deals setProgress={setProgress} />}
          />
          <Route
            exact
            path="/category"
            element={<Category setProgress={setProgress} />}
          />
          <Route
            exact
            path="/checkout"
            element={
              <Protected>
                <Checkout setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/product/:id"
            element={<ProductDetails setProgress={setProgress} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch} />}
          />
          <Route
            exact
            path="/orderSuccess/:id"
            element={
              <Protected>
                <OrderSuccess setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/setting"
            element={
              <Protected>
                <Setting setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <Protected>
                <Orders setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/orders/:id"
            element={
              <Protected>
                <OrderDetail setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Protected>
                <Profile setProgress={setProgress} />
              </Protected>
            }
          />
          <Route
            exact
            path="/signout"
            element={<Signout />}
          />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPwd />}
          />
          <Route
            exact
            path="*"
            element={<PageNotFound setProgress={setProgress} />}
          />
          <Route
            exact
            path="/productpagelist"
            element={<ProductPageList setProgress={setProgress} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch} />}
          />

        </Routes>
        <ToastContainer />
        <LoadingBar
          color={"#4F46E5"}
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </Router>
    </>
  );
};

export default App;
