import React from "react";
import Contact from "../../../components/guest/contact/Contact";
import ServiceList from "../../../components/guest/serviceList/ServiceList";
import "./sellerHome.scss";
import SellerIntro from "../../../components/seller/sellerIntro/SellerIntro";
import SellerSkill from "../../../components/seller/sellerSkill/SellerSkill";
import SellerEducate from "../../../components/seller/sellerEducate/SellerEducate";
import SellerCertificate from "../../../components/seller/sellerCertificate/SellerCertificate";
import SellerHeader from "../../../components/seller/sellerHeader/SellerHeader";
import { Button, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllCategories } from "../../../redux/categorySlice";
import { fetchServices, selectAllServices } from "../../../redux/serviceSlice";
import { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect } from "react";
export default function SellerHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const listService = useSelector(selectAllServices);
  const [selected, setSelected] = useState("featured");
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    } else {
      dispatch(fetchServices());
    }
  }, [user]);
  return (
    <div className="sellerHome">
      <SellerHeader />
      <div className="sellerHome_form">
        <div className="sellerHome_left">
          <div className="sellerHome_leftCard">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              style={{ width: "230px" }}
              alt="avatar"
            />
            {/* <h1 className="lsTitle">Nguyễn Thế Vinh</h1> */}
            <div className="sellerHome_leftCard_lsItem">
              <label>Nguyễn Thế Vinh</label>
            </div>
            <div className="sellerHome_leftCard_lsItem">
              <label>⭐⭐⭐⭐⭐</label>
              <div className="sellerHome_leftCard_lsOptions">
                <div className="sellerHome_leftCard_lsOptionItem">
                  <span className="sellerHome_leftCard_lsOptionText">
                    🌏 Quốc gia: Việt Nam
                  </span>
                </div>
                <div className="sellerHome_leftCard_lsOptionItem">
                  <span className="sellerHome_leftCard_lsOptionText">
                    🏛️ Thành phố: Ninh Bình
                  </span>
                </div>
                <div className="sellerHome_leftCard_lsOptionItem">
                  <span className="sellerHome_leftCard_lsOptionText">
                    Tham gia từ : 20/12/2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sellerHome_right">
          <div className="serviceList" id="intro">
            <Container className="service_cardGrid" maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {listService.slice(0, 9).map((item) => (
                  <ServiceList
                    className="service"
                    id={item.id}
                    image={item.gallery.imageGallery1}
                    sellerId={item.sellerId}
                    description={item.description}
                    rating={item.impression}
                  />
                ))}
              </Grid>
              <Pagination
                count={10}
                color="primary"
                className="service_pagging"
              />
            </Container>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <SellerIntro />
        <SellerSkill />
      </div>
      <div style={{ display: "flex" }}>
        <SellerEducate />
        <SellerCertificate />
      </div>

      <div className="sections">
        <Contact />
      </div>
    </div>
  );
}
