"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, total } = useCart();

if (cartItems.length === 0) {
    return (
    <main className="min-h-screen bg-[#0a0e17] max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-400 text-lg mb-4">Tu carrito está vacío</p>
        <Link href="/" className="text-cyan-400 hover:underline">
            Volver al catálogo
        </Link>
    </main>
    );
}

return (
    <main className="min-h-screen bg-[#0a0e17] max-w-4xl mx-auto px-4 py-6">
    <h1 className="text-2xl font-bold text-white mb-6">Tu Carrito</h1>

    <div className="flex flex-col gap-3 mb-6">
        {cartItems.map((item) => (
        <div
            key={item.id}
            className="flex items-center gap-4 border border-gray-800 rounded-lg p-4 bg-[#131822]"
        >
            <Image
                src={item.urlImage}
                alt={item.title}
                width={80}
                height={80}
                className="object-cover rounded-md flex-shrink-0 bg-white/5"
            />

            <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm">${item.price} c/u</p>

            <div className="flex items-center gap-3 mt-2">
                <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-[#1e2532] text-white p-1.5 rounded-md hover:bg-gray-700"
                >
                <Minus size={14} />
                </button>
                <span className="text-white font-medium w-6 text-center">{item.quantity}</span>
                <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-[#1e2532] text-white p-1.5 rounded-md hover:bg-gray-700"
                >
                <Plus size={14} />
                </button>

                <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-400 hover:text-red-300 p-1.5"
                >
                <Trash2 size={18} />
                </button>
            </div>
            </div>

            <span className="font-bold text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
        </div>
        ))}
    </div>

    <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">Total: ${total.toFixed(2)}</span>
        <button className="bg-cyan-400 text-black font-medium px-6 py-2.5 rounded-md hover:bg-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all">
        Proceder al pago
        </button>
    </div>
    </main>
);
}