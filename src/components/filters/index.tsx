"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import Sort from "../sort";
import Badge from "./badge";
import data from "./data";
import Filter from "./filter";
import { FilterContext } from "./filter-context";

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const { isSideBarOpen, setIsSideBarOpen } = useContext(FilterContext);
  const searchParams = useSearchParams();
  const brand = searchParams.getAll("brand");
  const viscosity = searchParams.getAll("viscosity");
  const size = searchParams.getAll("size");

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSideBarOpen]);

  const handleClearAll = () => {
    setIsSideBarOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("brand");
    params.delete("viscosity");
    params.delete("size");
    params.set("page", "1");
    router.push(pathname + "?" + params.toString());
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-10 h-screen w-full transform bg-white transition-transform duration-300 ease-in-out md:static md:h-auto md:w-1/4 md:transform-none md:transition-none lg:w-3/12 ${
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sticky top-0 bg-white p-4">
        <h4 className="hidden text-lg font-semibold md:block">Filters</h4>
        <div className="flex justify-between md:hidden">
          <h4 className="text-lg font-semibold">Sorts & Filters</h4>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsSideBarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="block p-4 md:hidden">
        <Sort />
      </div>
      <div className="h-[calc(100vh-70px)] overflow-y-auto p-4 md:h-auto md:overflow-visible">
        {Boolean(brand.length || viscosity.length || size.length) && (
          <div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Active filters</span>
              <button
                className="text-red-600 transition-colors hover:text-red-700"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {brand.map((item) => (
                <Badge key={item} label={item} type="brand" />
              ))}
              {viscosity.map((item) => (
                <Badge key={item} label={item} type="viscosity" />
              ))}
              {size.map((item) => (
                <Badge key={item} label={item} type="size" />
              ))}
            </div>
          </div>
        )}
        <div className="mt-4">
          {data.map(({ type, options }) => (
            <Filter key={type} type={type} options={options} />
          ))}
        </div>
      </div>
    </aside>
  );
}
