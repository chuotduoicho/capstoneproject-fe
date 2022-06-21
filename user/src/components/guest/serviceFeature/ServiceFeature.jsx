import { useEffect, useState } from "react";
import "./serviceFeature.scss";
import CategoryList from "../categoryList/CategoryList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  selectAllCategories,
} from "../../../redux/categorySlice";
import {
  fetchServiceDetail,
  fetchServices,
  selectAllServices,
} from "../../../redux/serviceSlice";
export default function ServiceFeature() {
  const [id, setId] = useState(null);
  const listCategory = useSelector(selectAllCategories);
  const listService = useSelector(selectAllServices);
  const [selected, setSelected] = useState("cat1");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchServices());
  }, []);
  console.log(id);
  useEffect(() => {
    if (id) {
      dispatch(fetchServiceDetail(id))
        .unwrap()
        .then(() => {
          navigate("/serviceDetail/" + id);
        });
    }
  }, [id]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>DỊCH VỤ NỔI BẬT</h1>
      <ul>
        {listCategory.slice(0, 5).map((item) => (
          <CategoryList
            title={item.name}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {listService.slice(0, 8).map((d) => (
          <div className="item" onClick={() => setId(d.id)}>
            <img src={d.gallery.imageGallery1} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
