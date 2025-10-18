export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string;
    Quantity?: number;
}
