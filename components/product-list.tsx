import { IProduct } from "@/types";
import React from "react";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface IProductListProps {
  title: string;
  products: IProduct[];
}

const ProductList = ({ title, products }: IProductListProps) => {
  if (!products.length) {
    return <NoResults />;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
