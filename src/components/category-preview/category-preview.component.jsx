import React from "react";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import { Box, Card, Grid } from "@mui/material";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <Box className="category-preview-container">
        <Card
          elevation={4}
          sx={{
            pr: 5,
            pl: 5,
            marginLeft: 3,
            fontFamily: "cursive",
            fontSize: 20,
            width: 200,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <Link to={title}>
            <h2>{title.toUpperCase()}</h2>
          </Link>
        </Card>
        <Box sx={{ padding: 2 }}>
          <Grid
            container
            rowGap={5}
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <Grid
                  item={true}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  style={{ height: 350 }}
                  key={product.id}
                >
                  <ProductCard key={product.id} product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CategoryPreview;
