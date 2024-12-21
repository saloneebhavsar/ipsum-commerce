import Pagination from "../pagination";
import Product, { IProduct } from "./product";

export default function Products({
  productsData,
  totalPages,
}: {
  productsData: IProduct[];
  totalPages: number;
}) {
  if (productsData.length === 0) {
    return (
      <div className="flex items-center justify-center py-10">
        <p>No products found</p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-3">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="my-5 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
