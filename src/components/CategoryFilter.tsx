import { Category } from "@/types/product";

// "all" es un valor especial nuestro para decir "mostrar todo".
// Category son las 5 categorías reales que definimos en product.ts.
type FilterValue = Category | "all";

interface CategoryFilterProps {
  selected: FilterValue;
  onSelect: (category: FilterValue) => void;
}

// Lista fija de categorías para pintar los botones.
// Si mañana agregás una categoría nueva, solo la sumás aquí.
const categories: FilterValue[] = ["all", "CPU", "GPU", "RAM", "Consolas", "Perifericos"];

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
return (
    <div className="flex flex-wrap gap-2 mb-4">
    {categories.map((cat) => (
        <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
            selected === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
            {cat === "all" ? "Todos" : cat}
        </button>
    ))}
    </div>
);
}