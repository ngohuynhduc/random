import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../store/store";

const ButtonReset = () => {
  const { setIsFetch } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => setIsFetch((prev) => !prev)}
    >
      Làm mới
    </Button>
  );
};

export default ButtonReset;
