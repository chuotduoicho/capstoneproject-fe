import "./sellerHeader.scss";
import {
  NotificationImportantOutlined,
  ChatBubbleOutline,
} from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
export default function SellerHeader() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // const handleLogout = (event) => {
  //   e.preventDefault();
  //   navigate("/login");
  // };
  // const handleSwitch = (event) => {
  //   e.preventDefault();
  //   navigate("/sellerHome");
  // };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className="sellerHeader ">
      <div className="wrapper">
        <div className="left">
          <a href="/sellerHome" className="logo">
            Jovinn.
          </a>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            className="btn_group"
          >
            <Button>Tạo dịch vụ</Button>
            <Button>Yêu cầu</Button>
            <Button>Hợp đồng</Button>
            <Button>Ví</Button>
          </ButtonGroup>
          {/* </div> */}
        </div>
        <div className="right">
          <div className="item"></div>
          <div className="item">
            <NotificationImportantOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="item"
          >
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </Button>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <Link
                        to="/buyerhome/profile"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem style={{ color: "black" }}>
                          Thông tin cá nhân
                        </MenuItem>
                      </Link>
                      <Link to="/sellerHome" style={{ textDecoration: "none" }}>
                        <MenuItem style={{ color: "black" }}>
                          Trở thành người mua
                        </MenuItem>
                      </Link>
                      <Link
                        to="/buyerhome/offers"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem style={{ color: "black" }}>
                          Quản lí offer
                        </MenuItem>
                      </Link>
                      <Link
                        to="/buyerhome/wallet"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem style={{ color: "black" }}>
                          Quản lí ví
                        </MenuItem>
                      </Link>
                      <Link to="/auth/login" style={{ textDecoration: "none" }}>
                        <MenuItem style={{ color: "black" }}>
                          Đăng xuất
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
}
