import React from "react";
import Topseller from "../../components/topseller/Topseller";
import Contact from "../../components/contact/Contact";
import ServiceList from "../../components/serviceList/ServiceList";
import "./sellerHome.scss";
import BuyerHeader from "../../components/buyerHeader/BuyerHeader";
import SellerHeader from "../../components/sellerHeader/SellerHeader";
export default function SellerHome() {
  return (
    <div className="seller_home">
      <SellerHeader />
      <div className="sections">
        <Contact />
      </div>
    </div>
  );
}
