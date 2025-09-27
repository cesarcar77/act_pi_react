// src/components/features/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types'; // Importa el tipo que definiste

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <Image src={product.image} alt={product.name} width={250} height={250} />
      <h3>{product.name}</h3>
      <p>Categoría: {product.category}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <Link href={`/products/${product.id}`}>Ver detalles</Link>
    </div>
  );
}