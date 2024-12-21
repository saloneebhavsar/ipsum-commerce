"use client";

import { Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { FilterContext } from "./filters/filter-context";
import Pagination from "./pagination";
import Sort from "./sort";

export default function SortAndPagination({
  totalPages,
  count,
  startIndex,
  lastIndex,
}: {
  totalPages: number;
  count: number;
  startIndex: number;
  lastIndex: number;
}) {
  const { setIsSideBarOpen } = useContext(FilterContext);
  const searchParams = useSearchParams();
  const [brand, viscosity, size] = [
    searchParams.getAll("brand"),
    searchParams.getAll("viscosity"),
    searchParams.getAll("size"),
  ];
  const appliedFilterCount = brand.length + viscosity.length + size.length;

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <p>
        Showing&nbsp;
        <span className="font-semibold">
          {startIndex + 1}-{lastIndex > count ? count : lastIndex}
        </span>
        &nbsp;of&nbsp;
        <span className="font-semibold">{count}</span>
      </p>
      <button
        className="flex items-center gap-2 font-semibold md:hidden"
        onClick={() => setIsSideBarOpen(true)}
      >
        <Filter className="h-4 w-4" />
        <span>Filter ({appliedFilterCount})</span>
      </button>
      <div className="hidden flex-wrap items-center gap-3 md:flex">
        <Sort />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
