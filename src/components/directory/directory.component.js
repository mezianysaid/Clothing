import React from "react";
import { Box } from "@mui/material";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <Box className="directory-container">
      {categories.map((categ) => (
        <CategoryItem key={categ.id} category={categ} />
      ))}
    </Box>
  );
};

export default Directory;
