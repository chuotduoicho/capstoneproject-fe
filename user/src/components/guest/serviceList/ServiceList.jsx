import "./serviceList.scss";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { FavoriteOutlined } from "@material-ui/icons";
export default function ServiceList({
  id,
  image,
  sellerId,
  description,
  rating,
}) {
  console.log(image);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to="/buyerHome/service" style={{ textDecoration: "none" }}>
        <Card className="service_card">
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
          <CardContent className="service_cardContent">
            <div className="service_intro">
              <CardMedia
                component="img"
                className="image"
                image="assets/tai.jpg"
                alt="Paella dish"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name"
              >
                Võ Đức Tài
              </Typography>
            </div>

            <Typography>{description}.</Typography>
          </CardContent>
          <CardActions className="service_cardAction">
            <Button size="small" color="primary">
              Chi tiết
            </Button>
            {/* <Button size="small" color="primary">
                    Edit
                  </Button> */}
            <FavoriteOutlined color="secondary" />
            <p className="service_rating">Đánh giá : {rating} ⭐</p>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
}
