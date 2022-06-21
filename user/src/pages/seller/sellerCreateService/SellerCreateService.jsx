import React from "react";
import Contact from "../../../components/guest/contact/Contact";
import "./sellerCreateService.scss";
import SellerHeader from "../../../components/seller/sellerHeader/SellerHeader";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Overview from "../../../components/seller/sellerCreateService/overview/Overview";
import Package from "../../../components/seller/sellerCreateService/package/Package";
import ProductImg from "../../../components/seller/sellerCreateService/productImg/ProductImg";
import Confirm from "../../../components/seller/sellerCreateService/confirm/Confirm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService, selectServiceId } from "../../../redux/serviceSlice";
import { useEffect } from "react";
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Tổng quan",
    "Gói dịch vụ",
    "Sản phẩm thử nghiệm",
    "Xác nhận tạo dịch vụ",
  ];
}

export default function SellerCreateService() {
  const [service, setService] = useState({
    sellerId: "eadbfb07-bab4-4405-a991-26fd9f40104c",
    title: "Hello",
    description: "abcdef",
    status: "ACTIVE",
    serviceType: {
      id: "10c00b31-d23c-4fc9-bced-0651059419af",
    },
    gallery: {
      imageGallery1:
        "https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA",
    },
    packages: [
      {
        title: "Noi Dung 1",
        shortDescription: "Mo ta Ngan 1",
        deliveryTime: "3",
        price: "3.12",
      },
    ],
  });
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Overview title={setTitle} />;
      case 1:
        return <Package packages={setPackages} />;
      case 2:
        return <ProductImg />;
      case 3:
        return <Confirm />;
      default:
        return "Unknown step";
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const navigate = useNavigate();
  const handleNext = () => {
    setService((preState) => ({
      ...preState,
      title: title,
      status: "DEACTIVE",
    }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleView = () => {
    navigate("/sellerHome/serviceDetail");
  };
  const [title, setTitle] = useState("");
  const [packages, setPackages] = useState([
    {
      title: "Noi Dung 1",
      shortDescription: "Mo ta Ngan 1",
      deliveryTime: "3",
      price: "3.12",
    },
    {
      title: "Noi Dung 2",
      shortDescription: "Mo ta Ngan 2",
      deliveryTime: "2",
      price: "4",
    },
    {
      title: "Noi Dung 3",
      shortDescription: "Mo ta Ngan 3",
      deliveryTime: "1",
      price: "5",
    },
  ]);
  const dispath = useDispatch();

  const handleCreateActive = (e) => {
    e.preventDefault();
    dispath(addService(service));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleCreateDeactive = async (e) => {
    e.preventDefault();
    setService((preState) => ({
      ...preState,
      status: "DEACTIVE",
    }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  useEffect(() => {
    if (service.status === "DEACTIVE") dispath(addService(service));
  }, [service]);
  console.log("title", title);
  console.log("package", packages);
  console.log("service", service);
  return (
    <div className="sellerHome">
      <SellerHeader />
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ textAlign: "center" }}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Tất cả các bước đã hoàn thành
            </Typography>
            <Button onClick={handleView} className={classes.button}>
              Xem chi tiết dịch vụ
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Trở lại
              </Button>
              {activeStep === steps.length - 1 ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateActive}
                    className={classes.button}
                  >
                    Tạo mới và mở
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateDeactive}
                    className={classes.button}
                  >
                    Tạo mới và tạm dừng
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Tiếp tục
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="sections">
        <Contact />
      </div>
    </div>
  );
}
