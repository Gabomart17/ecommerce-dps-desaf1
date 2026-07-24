"use client";
// "use client" es necesario porque esta página usa useState (interactividad
// en el navegador). Sin esto, Next.js la trataría como Server Component
// y no podríamos manejar clicks ni estado.

import { useState } from "react";
import { products } from "@/data/products";
import { Product, Category } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

type FilterValue = Category | "all";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>("all");

  // Filtramos el arreglo de productos según la categoría elegida.
  // Si es "all", devolvemos todos sin filtrar.
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Por ahora solo hace console.log — en la Fase 3 conectamos esto
  // al Context del carrito de verdad.
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