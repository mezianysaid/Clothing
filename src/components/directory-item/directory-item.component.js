import React from "react";
import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(route);
  };

  return (
    <Box
      className="directory-container"
      sx={{ width: { lg: "30%", md: "30%", sm: "45%", xs: "100%" } }}
    >
      <Box
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Box className="directory-body-container">
        <h2>{title}</h2>
        <Button
          variant="outlined"
          style={{
            color: "black",
            borderColor: "black",
            fontFamily: "-moz-initial",
            fontWeight: 400,
          }}
          className="btnshop"
          onClick={navigateTo}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
};

export default DirectoryItem;
