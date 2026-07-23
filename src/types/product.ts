// Definimos la forma que va a tener cada producto en toda la app.
// Al usar "interface", TypeScript nos avisa en el editor si en algún
// componente usamos mal un campo (ej. poner texto donde va un número).
export interface Product {
    id: number;
    title: string;
    category: Category;       // usamos un tipo restringido, no un string libre
    brand: string;
    price: number;
    urlImage: string;
    description: string;
    stock: number;            // cuántas unidades hay disponibles
    quantity: number;         // cuántas lleva el usuario en el carrito (arranca en 1 o 0)
}

// "Union type": solo se permiten estos 5 valores exactos como categoría.
// Esto es lo que te va a permitir hacer el filtrado del catálogo (requisito 2).
export type Category = "CPU" | "GPU" | "RAM" | "Consolas" | "Perifericos";