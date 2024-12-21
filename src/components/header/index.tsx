"use client";

import { ChevronDown, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import data from "./data";
import MobileMenu from "./mobile-nav";
import SearchBar from "./search-bar";
import SubMenu from "./sub-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<number>(1);

  const toggleMenu = (value: number) => {
    setCurrentMenu(value);
  };

  return (
    <header className="bg-primary text-white">
      <div className="container">
        <div className="flex items-center justify-between py-3 lg:py-2 xl:p-0">
          <div className="flex items-center">
            <button
              className="mr-4 p-2 xl:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="mr-6 text-2xl font-black">
              IPSUM
            </Link>
            <nav className="hidden xl:block">
              <ul className="flex text-sm">
                {data.map(({id,label}) => (
                  <li key={label}>
                    <button
                      className={`flex items-center space-x-1 px-3 py-5 font-semibold ${
                        id === currentMenu ? "bg-primary-light" : ""
                      }`}
                      onClick={() => toggleMenu(id)}
                    >
                      <span>{label}</span>
                      <ChevronDown className="w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            <button className="p-2" aria-label="User account">
              <User className="w-5" />
            </button>
            <button className="p-2" aria-label="Shopping cart">
              <ShoppingCart className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SubMenu subLinks={data[currentMenu - 1]?.subLinks || []} />
      <div className="block bg-primary-light px-4 py-2 xl:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
