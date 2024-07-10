import React from "react";
import { Box } from "@mui/material";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "/shop/hats",
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "/shop/sneakers",
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "/shop/jackets",
    },
    {
      id: 4,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "/shop/mens",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "/shop/womens",
    },
  ];

  return (
    <Box className="directory-head-container">
      {categories.map((categ) => (
        <DirectoryItem key={categ.id} category={categ} />
      ))}
    </Box>
  );
};

export default Directory;
