import "./login.scss";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import Link from "@material-ui/core/Link";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/buyerhome");
  };
  return (
    <div className="login">
      <Link href="/">
        <p className="title">Jovinn.</p>
      </Link>

      <div className="form">
        <TextField
          className="input"
          variant="outlined"
          placeholder="Tên đăng nhập *"
          required
        />
        <TextField
          className="input"
          variant="outlined"
          type="password"
          placeholder="Mật khẩu *"
          required
        />

        <Button
          variant="outlined"
          className="btn"
          type="submit"
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
        <Link href="#" color="#5327ef" className="link">
          Quên mật khẩu?
        </Link>
        <span className="link">
          Chưa có tài khoản?{" "}
          <Link href="/register" color="#5327ef">
            Đăng kí
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
