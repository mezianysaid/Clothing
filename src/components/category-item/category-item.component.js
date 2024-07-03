import React from "react";
import { Box, Button, Card } from "@mui/material";
import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <Card className="category-container">
      <Box
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Card className="category-body-container">
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
        >
          Shop now
        </Button>
      </Card>
    </Card>
  );
};

export default CategoryItem;
