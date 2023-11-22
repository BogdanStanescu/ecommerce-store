import { IProduct } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;

const getProduct = async ({ id }: { id: string }): Promise<IProduct> => {
  // const response = await fetch(`${URL}/${id}`);

  const response = await fetch(
    `http://localhost:3000/api/a3de4c05-3ca9-4e42-bb9d-3c2e5ef3f698/products/${id}`
  );

  return response.json();
};

export default getProduct;
