import qs from "query-string";
import { IProduct } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({ ...query }: Query): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      size_id: query.sizeId,
      category_id: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  return response.json();
};

export default getProducts;
