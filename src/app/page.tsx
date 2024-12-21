import Breadcrumbs from "@/components/breadcrumbs";
import Filters from "@/components/filters";
import FilterContextProvider from "@/components/filters/filter-context";
import Products from "@/components/products";
import data from "@/components/products/data";
import SortAndPagination from "@/components/sort-and-pagination";
import { use } from "react";


const perPage = 12;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function ProductListingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = use(searchParams);
  const { page, sort, brand, viscosity, size } = params;
  const currentPage = page ? +page : 1;
  const sortValue = sort ? +sort : 1;

  const filteredData = data.filter((product) => {
    const matchesBrand =
      !brand ||
      (Array.isArray(brand)
        ? brand.includes(product.brand)
        : brand === product.brand);

    const matchesViscosity =
      !viscosity ||
      (Array.isArray(viscosity)
        ? viscosity.includes(product.viscosity)
        : viscosity === product.viscosity);

    const matchesSize =
      !size ||
      (Array.isArray(size)
        ? size.some((s) => product.sizeOptions.includes(s))
        : product.sizeOptions.includes(size));

    return matchesBrand && matchesViscosity && matchesSize;
  });

  const count = filteredData.length;
  const totalPages = Math.ceil(count / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const lastIndex = startIndex + perPage;

  const sortedData =
    sortValue === 1
      ? [...filteredData].sort((a, b) => a.price - b.price)
      : [...filteredData].sort((a, b) => b.price - a.price);

  const paginatedData = sortedData.slice(startIndex, lastIndex);

  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className="text-2xl font-semibold mb-2">Hydraulic Fluids</h1>
      <p className="mb-5">
        Hydraulic oil is a fluid that has several functions. It serves as an
        energy transfer or power transmission medium, lubricant, and sealant.
        Also, it is a fluid that cools the equipment and carries contaminants
        away. Based on the division of hydraulics into hydrodynamics and
        hydrostatics, we have different hydraulic fluids. Firstly, hydraulic
        fluids for hydrodynamic applications are called power-transmission oils.
        Secondly, hydraulic fluids for hydrostatic application are called
        hydraulic oils.
        <button className="text-green hover:underline ml-2">Read more.</button>
      </p>
      <div className="flex gap-4">
        <FilterContextProvider>
          <Filters />
          <div className="w-full">
            <SortAndPagination
              totalPages={totalPages}
              count={count}
              startIndex={startIndex}
              lastIndex={lastIndex}
            />
            <Products productsData={paginatedData} totalPages={totalPages} />
          </div>
        </FilterContextProvider>
      </div>
    </div>
  );
}
