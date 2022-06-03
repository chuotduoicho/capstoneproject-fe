import React from "react";
import Contact from "../../components/contact/Contact";
import ServiceList from "../../components/serviceList/ServiceList";
import "./buyerProfile.scss";
import BuyerHeader from "../../components/buyerHeader/BuyerHeader";
import { Avatar, Container, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
export default function BuyerProfile() {
  return (
    <div className="buyer_profile">
      <BuyerHeader />
      <div className="sections_profile">
        <Container maxWidth="sm" className="form">
          <div className="form_left">
            <Avatar
              className="image"
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <TextField
              required
              id="standard-required"
              className="text_field"
              type="file"
            />
          </div>
          <div className="form_right">
            <TextField
              required
              id="standard-required"
              label="First Name"
              defaultValue="Họ"
              className="text_field"
            />
            <TextField
              required
              id="standard-required"
              label="Tên"
              defaultValue="Vinh"
              className="text_field"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Email"
              defaultValue="vinh@gmail.com"
              className="text_field"
            />
            <TextField
              required
              id="standard-required"
              label="Địa chỉ"
              defaultValue="FPT Hòa Lạc"
              className="text_field"
            />
            <TextField
              required
              id="standard-required"
              label="Ngày sinh"
              defaultValue="2017-05-24"
              type="date"
              className="text_field"
            />
            <Button variant="outlined" color="primary" className="btn">
              Cập nhật
            </Button>
          </div>
        </Container>

        <Contact />
      </div>
    </div>
  );
}
