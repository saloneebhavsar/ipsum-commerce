"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? +pageParam : 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex items-center">
      <button
        className="border border-r-0 border-primary-lighter px-3 py-3.5 text-sm disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => {
          router.push(
            pathname +
              "?" +
              createQueryString("page", (currentPage - 1).toString()),
          );
        }}
      >
        <ChevronLeft />
      </button>
      <div className="border border-primary-lighter px-3 py-4 text-sm">
        Page {currentPage} of {totalPages}
      </div>
      <button
        className="border border-l-0 border-primary-lighter px-3 py-3.5 text-sm disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => {
          router.push(
            pathname +
              "?" +
              createQueryString("page", (currentPage + 1).toString()),
          );
        }}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
