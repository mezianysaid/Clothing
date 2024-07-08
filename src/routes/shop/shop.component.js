import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import { Box, Grid } from "@mui/material";
const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        rowGap={5}
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <Grid lg={3} md={4} sm={6} xs={12} style={{ height: 350 }}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
