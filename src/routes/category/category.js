import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { Box, Grid, Card } from "@mui/material";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Box className="category-container">
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
        <h2>{category && category.toUpperCase()}</h2>
      </Card>
      <Box sx={{ padding: 2 }}>
        <Grid
          container
          rowGap={5}
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {products &&
            products.map((product) => (
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
  );
};

export default Category;
