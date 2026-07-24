"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/types/product";
import { toast } from "sonner";

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "cart-items";

export function CartProvider({ children }: { children: ReactNode }) {
const [cartItems, setCartItems] = useState<Product[]>([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
    setCartItems(JSON.parse(saved));
    }
    setIsLoaded(true);
}, []);

useEffect(() => {
    if (isLoaded) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    }
}, [cartItems, isLoaded]);

const addToCart = (product: Product) => {
    setCartItems((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
        return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title} agregado al carrito`);
};

const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
    prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
};

const decrementQuantity = (id: number) => {
    setCartItems((prev) =>
    prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
    );
};

const removeFromCart = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (item) toast.info(`${item.title} eliminado del carrito`);
};

const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

return (
    <CartContext.Provider
        value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart, total }}
    >
    {children}
    </CartContext.Provider>
);
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
    return context;
}