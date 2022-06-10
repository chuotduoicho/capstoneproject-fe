import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendMail from "./pages/auth/forgotPassword/sendMail/SendMail";
import SetNewPassword from "./pages/auth/forgotPassword/setNewPassword/SetNewPassword";
import VerifyEmail from "./pages/auth/forgotPassword/verifyEmail/VerifyEmail";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import BuyerHome from "./pages/buyer/buyerHome/BuyerHome";
import BuyerProfile from "./pages/buyer/buyerProfile/BuyerProfile";
import Home from "./pages/guest/home/Home";
import ServiceDetail from "./pages/guest/serviceDetail/ServiceDetail";
import SellerHome from "./pages/seller/sellerHome/SellerHome";
// import BuyerHome from "./pages/buyerHome/BuyerHome";
// import BuyerProfile from "./pages/buyerProfile/BuyerProfile";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import SellerHome from "./pages/sellerHome/SellerHome";
// import ServiceDetail from "./pages/serviceDetail/ServiceDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verifyMail" element={<VerifyEmail />} />
            <Route path="sendMail" element={<SendMail />} />
            <Route path="setNewPassword" element={<SetNewPassword />} />
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
