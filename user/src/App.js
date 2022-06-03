import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyerHome from "./pages/buyerHome/BuyerHome";
import BuyerProfile from "./pages/buyerProfile/BuyerProfile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SellerHome from "./pages/sellerHome/SellerHome";
import ServiceDetail from "./pages/serviceDetail/ServiceDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/register">
            <Route index element={<Register />} />
          </Route>
          <Route path="/buyerhome">
            <Route index element={<BuyerHome />} />

            <Route path="profile" element={<BuyerProfile />} />

            <Route path="service" element={<ServiceDetail />} />
          </Route>
          <Route path="/sellerhome">
            <Route index element={<SellerHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
