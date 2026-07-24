"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
const { cartItems } = useCart();
const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

return (
    <header className="bg-[#0a0e17] border-b border-gray-800 sticky top-0 z-10">
    <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white">
        <span className="text-cyan-400">Gaming</span>Store
        </Link>

        <Link href="/cart" className="relative">
        <ShoppingCart className="text-white" size={24} />
        {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
            </span>
        )}
        </Link>
    </div>
    </header>
);
}