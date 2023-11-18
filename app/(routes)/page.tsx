import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboards = await getBillboards({
    id: "c116c37a-3727-462a-952b-1e7bfa6331b5",
  });

  return (
    <Container>
      <div className="space-y-10 mb-10">
        <Billboard billboard={billboards} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-10">
        <ProductList title="Featured Products" products={products} />
      </div>
    </Container>
  );
};

export default Home;
