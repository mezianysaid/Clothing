import React from "react";
import { gql, useQuery } from "@apollo/client";
const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
const CategoryGraph = () => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  console.log("data:", data);

  return { data };
};

export default CategoryGraph;
