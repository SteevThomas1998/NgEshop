import { Category } from "./category";

export class Product {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  images?: string[];
  brand?: string;
  price?: number;
  category?: Category;
  countInStock?: number;
  isFeatured?: string;
}
