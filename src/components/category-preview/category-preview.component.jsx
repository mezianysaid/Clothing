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
            fontFamily: "fantasy",
            fontSize: 16,
            width: 200,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 0,
            letterSpacing: 2,
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
                  style={{ minHeight: 350 }}
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
