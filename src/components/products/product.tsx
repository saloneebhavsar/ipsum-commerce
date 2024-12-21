import Image from "next/image";

export interface IProduct {
  id: number;
  brand: string;
  name: string;
  sku: string;
  sizesAvailable: boolean;
  price: number;
  viscosity: string;
  sizeOptions: string[];
}

export default function Product({ product }: { product: IProduct }) {
  const { brand, name, sku, sizesAvailable, price } = product;
  return (
    <div className="flex max-w-sm flex-col border border-primary-lighter p-4">
      <div className="relative order-2 aspect-[3/2] w-full md:order-1">
        <Image
          src="/placeholder.webp"
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="order-1 min-h-40 md:order-2">
        <p className="my-4 text-sm font-semibold text-primary">{brand}</p>
        <h2 className="mb-8 text-2xl font-bold text-black line-clamp-2 md:line-clamp-none">
        {name}
      </h2>
      </div>
      <div className="order-3">
        <div className="mt-2 flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
          <span className="text-gray-500">SKU: {sku}</span>
          {sizesAvailable && (
            <span className="text-green">Multiple Sizes Available</span>
          )}
        </div>
        <div className="mt-4">
          <p className="text-lg">From</p>
          <p className="text-3xl font-semibold text-black">${price}</p>
        </div>
        <button className="mt-4 w-full bg-secondary px-4 py-3 text-sm font-semibold uppercase text-black hover:bg-secondary/90">
          View Product
        </button>
      </div>
    </div>
  );
}
