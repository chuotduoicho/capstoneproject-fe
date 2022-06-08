import "./register.scss";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { register } from "../../redux/authSlice";
import { clearMessage } from "../../redux/message";

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    console.log({ username, password, email, firstName, lastName });
    dispatch(register({ username, password, email, firstName, lastName }))
      .unwrap()
      .then(() => {
        setSuccessful(true);

        navigate("/login");
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="login">
      <Link href="/">
        <p className="logo_login">Jovinn.</p>
        {/* <img src="./assets/logo-removebg.png" className="logo_login" /> */}
      </Link>
      <form className="form" onSubmit={handleRegister}>
        <p className="title_form">Đăng kí</p>
        <TextField
          className="input"
          variant="outlined"
          placeholder="Tên đăng nhập *"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          className="input"
          type="password"
          variant="outlined"
          placeholder="Mật khẩu *"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          className="input"
          type="password"
          variant="outlined"
          placeholder="Xác nhận mật khẩu *"
          required
        />
        <TextField
          className="input"
          variant="outlined"
          placeholder="Họ *"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          className="input"
          variant="outlined"
          placeholder="Tên *"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <TextField
          className="input"
          variant="outlined"
          placeholder="Email *"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="outlined" className="btn" type="submit">
          Đăng kí
        </Button>
        <span className="link">
          Đã có tài khoản?{" "}
          <Link href="/login" color="#5327ef">
            Đăng nhập
          </Link>
        </span>
        {message && (
          <div
            className={successful ? "login_success" : "login_error"}
            role="alert"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
