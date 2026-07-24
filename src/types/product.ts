export interface Product {
    id: number;
    title: string;
    category: Category;      
    brand: string;
    price: number;
    urlImage: string;
    description: string;
    stock: number;            
    quantity: number;         
}

export type Category = "CPU" | "GPU" | "RAM" | "Consolas" | "Perifericos";