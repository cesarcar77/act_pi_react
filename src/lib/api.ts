// src/lib/api.ts
import { Product } from '@/types';

// Datos de productos simulados (en un proyecto real, estos datos vendrían de una API o base de datos)
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Procesador AMD Ryzen 5 5600X",
    category: 'CPU',
    price: 199.99,
    image: "/images/cpu_amd.jpg",
    description: "Un procesador de alto rendimiento ideal para gaming y productividad."
  },
  {
    id: 2,
    name: "Tarjeta Gráfica NVIDIA GeForce RTX 3060",
    category: 'GPU',
    price: 329.50,
    image: "/images/gpu_nvidia.jpg",
    description: "Gráficos impresionantes con Ray Tracing y DLSS."
  },
  // Añade más productos aquí para que tus colaboradores los usen
  {
    id: 3,
    name: "Memoria RAM Corsair Vengeance 16GB",
    category: 'RAM',
    price: 79.99,
    image: "/images/ram_corsair.jpg",
    description: "Módulos de alta velocidad para un rendimiento fluido."
  },
  {
    id: 4,
    name: "Disco SSD Samsung 970 EVO Plus 1TB",
    category: 'Storage',
    price: 109.99,
    image: "/images/ssd_samsung.jpg",
    description: "Almacenamiento ultra-rápido para tus juegos y aplicaciones."
  },
];

export async function getFeaturedProducts(): Promise<Product[]> {
  // Retorna los 3 primeros productos como destacados
  return PRODUCTS.slice(0, 3);
}

export async function getProducts(): Promise<Product[]> {
  // Retorna todos los productos
  return PRODUCTS;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  // Busca un producto por su ID
  return PRODUCTS.find(product => product.id === id);
}