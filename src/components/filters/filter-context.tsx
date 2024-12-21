"use client";

import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

interface FilterType {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

export const FilterContext = createContext<FilterType>({
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
});

export default function FilterContextProvider({ children }: { children: ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <FilterContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </FilterContext.Provider>
  );
}
