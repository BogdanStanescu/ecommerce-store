import { ICategory } from "@/types";

const URL = process.env.NEXT_PUBLIC_API_URL;

const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(`${URL}/categories`);

  return response.json();
};

export default getCategories;
