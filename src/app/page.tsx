"use client";


import { useState } from "react";
import { products } from "@/data/products";
import { Product, Category } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

type FilterValue = Category | "all";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>("all");
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  const handleAddToCart = (product: Product) => {
    console.log("Agregado al carrito:", product.title);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo Gaming</h1>

      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="flex flex-col gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </main>
  );
}