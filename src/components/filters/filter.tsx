"use client";

import { Minus, Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Filter({
  type,
  options,
}: {
  type: string;
  options: string[];
}) {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (type: string, option: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");

      const existingFilters = params.getAll(type);
      if (existingFilters.includes(option)) {
        params.delete(type);
        existingFilters
          .filter((item) => item !== option)
          .forEach((filter) => params.append(type, filter));
      } else {
        params.append(type, option);
      }

      return params.toString();
    },
    [searchParams],
  );

  const handleFilterChange = (type: string, option: string) => {
    router.push(pathname + "?" + createQueryString(type.toLowerCase(), option));
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between py-2"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{type}</span>
        <span className="text-green">{open ? <Minus /> : <Plus />}</span>
      </div>
      {open && (
        <ul className="my-3">
          {options.map((option) => (
            <li key={option} className="border-t border-primary-lighter py-3">
              <button onClick={() => handleFilterChange(type, option)} className="w-full text-left">
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
