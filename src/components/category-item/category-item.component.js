import React from "react";
import { Box, Button } from "@mui/material";
import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <Box className="category-container">
      <Box
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Box className="category-body-container">
        <h2>{title}</h2>
        <Button variant="outlined">Shop now</Button>
      </Box>
    </Box>
  );
};

export default CategoryItem;
