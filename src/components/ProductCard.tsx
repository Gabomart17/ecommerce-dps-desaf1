import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
return (
    <div className="flex items-center gap-4 border border-gray-800 rounded-lg p-4 bg-[#131822] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all">
    <Image
        src={product.urlImage}
        alt={product.title}
        width={100}
        height={100}
        className="object-cover rounded-md flex-shrink-0 bg-white/5"
    />
    <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-sm md:text-base text-white">{product.title}</h3>
        <p className="text-cyan-400 text-xs">{product.brand} · {product.category}</p>
        <p className="text-gray-400 text-xs mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-lg text-white">${product.price}</span>
        <button
            onClick={() => onAddToCart(product)}
            className="bg-cyan-400 text-black text-sm font-medium px-3 py-1.5 rounded-md hover:bg-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"
        >
            Agregar
        </button>
        </div>
    </div>
    </div>
);
}