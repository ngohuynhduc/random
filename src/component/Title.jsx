import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          color="secondary"
          style={{ position: "absolute", top: "0", left: "20px" }}
        >
          Trang chủ
        </Button>
      </Link>
      <h1 className="title">KIỂM TRA KIẾN THỨC</h1>
    </div>
  );
};

export default Title;
