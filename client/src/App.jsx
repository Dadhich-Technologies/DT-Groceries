import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./Layout/Footer/Footer";
import Cart from "./Layout/Cart/Cart";
import Authentication from "./pages/Authentication/Authentication";
import './App.css'
import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop/Shop";

const Home = lazy(() => import("./pages/Home.jsx/Home"));
const Faq = lazy(() => import("./pages/FAQ/Faq"));
const ContactUs = lazy(() => import("./components/Contact_us/Contact_us"));
const ErrorPage = lazy(() => import("./pages/404/404"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Cart />
      <Authentication />

      <Suspense
        fallback={
          <div className=" w-screen h-screen grid place-content-center">
            {" "}
            <div className="loader">
              <span className="loader-text">Loading</span>
              <span className="load"></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
