"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Sort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const sortValue = sortParam ? +sortParam : "";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(pathname + "?" + createQueryString("sort", selectedValue));
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor="sort" className="font-semibold">
        Sort By:
      </label>
      <select
        id="sort"
        className="min-w-48 border border-primary-lighter p-3 text-sm lg:p-4"
        value={sortValue}
        onChange={handleSortChange}
      >
        <option value="" disabled>
          Select Sort By
        </option>
        <option value={1}>Price: Low to High</option>
        <option value={2}>Price: High to Low</option>
      </select>
    </div>
  );
}
