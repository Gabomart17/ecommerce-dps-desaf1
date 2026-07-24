import { Category } from "@/types/product";

type FilterValue = Category | "all";

interface CategoryFilterProps {
    selected: FilterValue;
    onSelect: (category: FilterValue) => void;
}

const categories: FilterValue[] = ["all", "CPU", "GPU", "RAM", "Consolas", "Perifericos"];

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
return (
    <div className="flex flex-wrap gap-2 mb-6">
    {categories.map((cat) => (
        <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
            selected === cat
            ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            : "bg-[#131822] text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400"
        }`}
        >
        {cat === "all" ? "Todos" : cat}
        </button>
    ))}
    </div>
);
}