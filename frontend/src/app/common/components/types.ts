export interface ProductData {
    _id: string;
    name: string;
    price: number;
    description: string;
    characteristics: string[];
    stock: number;
    images: string[];
    qualification: number;
    active: boolean;
    id_user: string;
    id_category: string;
    id_subcategory: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }