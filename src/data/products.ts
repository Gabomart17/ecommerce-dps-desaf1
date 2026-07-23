import { Product } from "@/types/product";

// Datos estáticos como pide el documento (Guía de Laboratorio No. 4).
// Nota: reemplazá las urlImage con imágenes reales que consigas
// (capturas de Amazon, sitios oficiales de marca, etc.) — estas son de ejemplo.
export const products: Product[] = [
  // ---------- CPU ----------
    { id: 1, title: "AMD Ryzen 7 7800X3D", category: "CPU", brand: "AMD", price: 449, urlImage: "/images/ryzen-7800x3d.jpg", description: "Procesador gaming 8 núcleos con 3D V-Cache", stock: 12, quantity: 1 },
    { id: 2, title: "Intel Core i5-14600K", category: "CPU", brand: "Intel", price: 319, urlImage: "/images/i5-14600k.jpg", description: "14 núcleos, ideal relación precio/rendimiento", stock: 20, quantity: 1 },
    { id: 3, title: "AMD Ryzen 5 7600", category: "CPU", brand: "AMD", price: 199, urlImage: "/images/ryzen-5-7600.jpg", description: "6 núcleos, excelente para gama media", stock: 25, quantity: 1 },
    { id: 4, title: "Intel Core i9-14900K", category: "CPU", brand: "Intel", price: 589, urlImage: "/images/i9-14900k.jpg", description: "24 núcleos, tope de gama para entusiastas", stock: 8, quantity: 1 },

  // ---------- GPU ----------
    { id: 5, title: "NVIDIA RTX 4070 Super", category: "GPU", brand: "NVIDIA", price: 599, urlImage: "/images/rtx-4070-super.jpg", description: "1440p ultra con Ray Tracing y DLSS 3", stock: 10, quantity: 1 },
    { id: 6, title: "AMD Radeon RX 7800 XT", category: "GPU", brand: "AMD", price: 549, urlImage: "/images/rx-7800xt.jpg", description: "Gran rendimiento 1440p, 16GB VRAM", stock: 9, quantity: 1 },
    { id: 7, title: "NVIDIA RTX 4090", category: "GPU", brand: "NVIDIA", price: 1599, urlImage: "/images/rtx-4090.jpg", description: "La más potente para 4K y creación de contenido", stock: 3, quantity: 1 },
    { id: 8, title: "NVIDIA RTX 4060 Ti", category: "GPU", brand: "NVIDIA", price: 399, urlImage: "/images/rtx-4060ti.jpg", description: "1080p/1440p eficiente, ideal para la mayoría", stock: 18, quantity: 1 },

  // ---------- RAM ----------
    { id: 9, title: "Corsair Vengeance 32GB DDR5 6000MHz", category: "RAM", brand: "Corsair", price: 129, urlImage: "/images/corsair-vengeance-32gb.jpg", description: "Kit 2x16GB, alto rendimiento para gaming", stock: 30, quantity: 1 },
    { id: 10, title: "G.Skill Trident Z5 16GB DDR5 6400MHz", category: "RAM", brand: "G.Skill", price: 89, urlImage: "/images/gskill-trident-z5.jpg", description: "Kit 2x8GB, RGB, overclock friendly", stock: 22, quantity: 1 },
    { id: 11, title: "Kingston Fury Beast 32GB DDR4 3200MHz", category: "RAM", brand: "Kingston", price: 79, urlImage: "/images/kingston-fury-beast.jpg", description: "Kit 2x16GB, compatible con placas DDR4", stock: 35, quantity: 1 },

  // ---------- Consolas ----------
    { id: 12, title: "PlayStation 5 Slim", category: "Consolas", brand: "Sony", price: 499, urlImage: "/images/ps5-slim.jpg", description: "Edición estándar con lector de disco", stock: 15, quantity: 1 },
    { id: 13, title: "Xbox Series X", category: "Consolas", brand: "Microsoft", price: 499, urlImage: "/images/xbox-series-x.jpg", description: "4K nativo, 1TB de almacenamiento", stock: 11, quantity: 1 },
    { id: 14, title: "Nintendo Switch OLED", category: "Consolas", brand: "Nintendo", price: 349, urlImage: "/images/switch-oled.jpg", description: "Pantalla OLED de 7 pulgadas", stock: 20, quantity: 1 },
    { id: 15, title: "Steam Deck OLED", category: "Consolas", brand: "Valve", price: 549, urlImage: "/images/steam-deck-oled.jpg", description: "PC gaming portátil con acceso a Steam", stock: 7, quantity: 1 },

  // ---------- Periféricos ----------
    { id: 16, title: "Logitech G Pro X Superlight 2", category: "Perifericos", brand: "Logitech", price: 159, urlImage: "/images/gpro-x-superlight2.jpg", description: "Mouse inalámbrico ultraliviano 60g", stock: 25, quantity: 1 },
    { id: 17, title: "Razer BlackWidow V4", category: "Perifericos", brand: "Razer", price: 169, urlImage: "/images/blackwidow-v4.jpg", description: "Teclado mecánico switches verdes", stock: 18, quantity: 1 },
    { id: 18, title: "HyperX Cloud III", category: "Perifericos", brand: "HyperX", price: 99, urlImage: "/images/hyperx-cloud3.jpg", description: "Audífonos gaming con sonido envolvente", stock: 28, quantity: 1 },
    { id: 19, title: "SteelSeries QcK Heavy", category: "Perifericos", brand: "SteelSeries", price: 29, urlImage: "/images/steelseries-qck.jpg", description: "Mousepad grande de tela premium", stock: 40, quantity: 1 },
    { id: 20, title: "Elgato Stream Deck MK.2", category: "Perifericos", brand: "Elgato", price: 149, urlImage: "/images/streamdeck-mk2.jpg", description: "Controlador con 15 teclas LCD programables", stock: 14, quantity: 1 },
];