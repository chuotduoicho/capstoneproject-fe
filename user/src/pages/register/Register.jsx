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

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const handleRegister = (formValue) => {
    const { username, password } = formValue;
    setSuccessful(false);
    dispatch(register({ username, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        // e.preventDefault();
        navigate("/login");
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="login">
      <Link href="/">
        <p className="title">Jovinn.</p>
      </Link>
      <form
        className="form"
        onSubmit={handleRegister}
        initialValues={initialValues}
      >
        <TextField
          className="input"
          variant="outlined"
          placeholder="Tên đăng nhập *"
          name="username"
          required
        />
        <TextField
          className="input"
          type="password"
          variant="outlined"
          placeholder="Mật khẩu *"
          name="password"
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
          required
        />
        <TextField
          className="input"
          variant="outlined"
          placeholder="Tên *"
          required
        />
        <TextField
          className="input"
          variant="outlined"
          placeholder="Email *"
          required
        />
        <Button variant="outlined" className="btn" type="submit">
          Register
        </Button>
        <span className="link">
          Đã có tài khoản?{" "}
          <Link href="/login" color="#5327ef">
            Đăng nhập
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
