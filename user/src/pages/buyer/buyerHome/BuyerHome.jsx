import React, { useState, useEffect } from "react";
import Topseller from "../../../components/guest/topseller/Topseller";
import Contact from "../../../components/guest/contact/Contact";
import ServiceList from "../../../components/guest/serviceList/ServiceList";
import "./buyerHome.scss";
import BuyerHeader from "../../../components/buyer/buyerHeader/BuyerHeader";
import { FilterListOutlined, Label } from "@material-ui/icons";
import CategoryList from "../../../components/guest/categoryList/CategoryList";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchCategories,
  selectAllCategories,
} from "../../../redux/categorySlice";
import { fetchServices, selectAllServices } from "../../../redux/serviceSlice";
import Pagination from "@material-ui/lab/Pagination";
export default function BuyerHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const listCategory = useSelector(selectAllCategories);
  const listService = useSelector(selectAllServices);
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/auth/login");
  //   }
  // }, [user]);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    } else {
      dispatch(fetchCategories());
      dispatch(fetchServices());
    }
  }, [user]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(listService);
  return (
    <div className="buyerHome">
      <BuyerHeader />
      <div className="buyerHome_form">
        <div className="buyerHome_left">
          <div className="listSearch">
            <h1 className="lsTitle">
              Lọc dịch vụ <FilterListOutlined />
            </h1>
            <div className="lsItem">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>IT</MenuItem>
                  <MenuItem value={20}>Content</MenuItem>
                  <MenuItem value={30}>Bảo vệ</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="lsItem">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Thành phố</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Hà Nội</MenuItem>
                  <MenuItem value={20}>Ninh Bình</MenuItem>
                  <MenuItem value={30}>Nghệ An</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="lsItem">
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá thấp nhất <small>($)</small>:
                  </span>
                  <input
                    type="number"
                    // onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá cao nhất <small>($)</small>:
                  </span>
                  <input
                    type="number"
                    // onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <label>Đánh giá</label>
                <div className="lsOptionItem">
                  <Rating name="size-small" defaultValue={2} size="small" />
                </div>
              </div>
              {/* <button onClick={handleClick}>Search</button> */}
            </div>
          </div>
        </div>
        <div className="buyerHome_right">
          <ul className="list">
            {listCategory.slice(0, 5).map((item) => (
              <CategoryList
                title={item.name}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          {/* <div className="sort">Sắp xếp theo:</div> */}
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
      <div className="sections">
        <Topseller />
        <Contact />
      </div>
    </div>
  );
}
