import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <span style={{ color: "gray" }}>Loading data ........</span>
        <CircularProgress size={180} sx={{ color: "gray" }} />
      </Box>
    </>
  );
};

export default Spinner;
