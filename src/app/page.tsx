"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { Category } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { useCart } from "@/context/CartContext";

type FilterValue = Category | "all";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>("all");
  const { addToCart } = useCart();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0a0e17] max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-1 text-white">
        <span className="text-cyan-400">Catálogo</span> Gaming
      </h1>
      <p className="text-gray-400 text-sm mb-4">Hardware y periféricos para tu setup</p>

      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="flex flex-col gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}