import Image from "next/image";
import { Product } from "@/types/product";

// Definimos qué props recibe este componente.
// onAddToCart es una función que la página padre nos pasa,
// así este componente no necesita saber CÓMO funciona el carrito,
// solo avisa "agregaron este producto" cuando lo llaman.
interface ProductCardProps {
product: Product;
onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
return (
    <div className="flex items-center gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
    {/* Requisito 4 del documento: imagen a la izquierda del nombre.
          Por eso el div principal es "flex" (fila) en vez de columna. */}
    <Image
        src={product.urlImage}
        alt={product.title}
        width={100}
        height={100}
        className="object-cover rounded-md flex-shrink-0"
    />

    <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-sm md:text-base">{product.title}</h3>
        <p className="text-gray-500 text-xs">{product.brand} · {product.category}</p>
        <p className="text-gray-600 text-xs mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-lg">${product.price}</span>
            <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
            >
            Agregar
        </button>
        </div>
    </div>
    </div>
);
}