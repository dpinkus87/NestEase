import React from "react";
import { useQuery } from "@apollo/client";
import ProductCard from "../components/ProductCard";
import { QUERY_PRODUCTS } from "../utils/queries";

const Product = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const thoughts = data?.products || [];

  return (
    <main>
      <div>
        <ProductCard />
      </div>
    </main>
  );
};

export default Product;
