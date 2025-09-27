// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/api';
import Image from 'next/image';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}