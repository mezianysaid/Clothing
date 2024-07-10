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
    <Card className="directory-container">
      <Box
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Card className="directory-body-container">
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
      </Card>
    </Card>
  );
};

export default DirectoryItem;
